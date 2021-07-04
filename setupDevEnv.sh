#!/usr/bin/env sh
set -o pipefail
# set -x


dedupFile() {
  echo "Env file $1"
  echo "--------"
  sort "$1" | uniq | tee "$1"
  echo "--------"
}

HASURA_ENV_FILE="hasura/.env"
NEXT_ENV_FILE=".env.local"


[ ! -f private.pem ] && openssl genrsa -out private.pem 2048
[ ! -f public.pem ] && openssl rsa -in private.pem -pubout -out public.pem

HASURA_GRAPHQL_ADMIN_SECRET=$(openssl rand -hex 32)

if [ -f "$HASURA_ENV_FILE" ]; then
  TMP_SECRET=$(grep 'HASURA_GRAPHQL_ADMIN_SECRET' $HASURA_ENV_FILE | cut -d '=' -f 2-)
  [ -n "$TMP_SECRET" ] && HASURA_GRAPHQL_ADMIN_SECRET=$TMP_SECRET
fi;

PUBLIC=$(awk -v ORS='\\n' '1' public.pem)
PRIVATE=$(awk -v ORS='\\n' '1' private.pem)

{
  echo "HASURA_GRAPHQL_ADMIN_SECRET=$HASURA_GRAPHQL_ADMIN_SECRET"
  echo "JWT_PUBLIC_KEY=\"$PUBLIC\""
  echo "HASURA_GRAPHQL_ENDPOINT=\"http://127.0.0.1:8080\""
} >> $HASURA_ENV_FILE

{
  echo "NEXT_AUTH_JWT_SECRET_PRIVATE=\"$PRIVATE\""
  echo "NEXTAUTH_URL=\"http://localhost:3000\""
  echo "HASURA_ADMIN=$HASURA_GRAPHQL_ADMIN_SECRET"
  echo "HASURA_URL=http://localhost:8080"
} >> $NEXT_ENV_FILE

echo "Set env for hasura"
dedupFile $HASURA_ENV_FILE

echo "Set env for nextjs"
dedupFile $NEXT_ENV_FILE


cd hasura && docker-compose up -d

echo "Wait for hasura to be up"
until $(curl --output /dev/null --silent --fail http://127.0.0.1:8080/v1/version); do
    echo '.'
    sleep 1
done

echo "Apply migrations"

yarn hasura migrate apply --skip-update-check --project hasura

echo "Apply metadata"
yarn hasura metadata apply --skip-update-check --project hasura

