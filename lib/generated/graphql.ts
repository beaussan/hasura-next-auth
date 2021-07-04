import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  provider_account_id: Scalars['String'];
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsCompoundIdKey = 'accounts_compound_id_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "allowed_roles" */
export type Allowed_Roles = {
  __typename?: 'allowed_roles';
  role: Roles_Enum;
  /** An object relationship */
  roleByRole: Roles;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "allowed_roles" */
export type Allowed_Roles_Aggregate = {
  __typename?: 'allowed_roles_aggregate';
  aggregate?: Maybe<Allowed_Roles_Aggregate_Fields>;
  nodes: Array<Allowed_Roles>;
};

/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_Fields = {
  __typename?: 'allowed_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Allowed_Roles_Max_Fields>;
  min?: Maybe<Allowed_Roles_Min_Fields>;
};


/** aggregate fields of "allowed_roles" */
export type Allowed_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allowed_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allowed_roles" */
export type Allowed_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Allowed_Roles_Max_Order_By>;
  min?: Maybe<Allowed_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "allowed_roles" */
export type Allowed_Roles_Arr_Rel_Insert_Input = {
  data: Array<Allowed_Roles_Insert_Input>;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "allowed_roles". All fields are combined with a logical 'AND'. */
export type Allowed_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  _not?: Maybe<Allowed_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Allowed_Roles_Bool_Exp>>>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  roleByRole?: Maybe<Roles_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "allowed_roles" */
export enum Allowed_Roles_Constraint {
  /** unique or primary key constraint */
  AllowedRolesPkey = 'allowed_roles_pkey'
}

/** input type for inserting data into table "allowed_roles" */
export type Allowed_Roles_Insert_Input = {
  role?: Maybe<Roles_Enum>;
  roleByRole?: Maybe<Roles_Obj_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Allowed_Roles_Max_Fields = {
  __typename?: 'allowed_roles_max_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "allowed_roles" */
export type Allowed_Roles_Max_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Allowed_Roles_Min_Fields = {
  __typename?: 'allowed_roles_min_fields';
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "allowed_roles" */
export type Allowed_Roles_Min_Order_By = {
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "allowed_roles" */
export type Allowed_Roles_Mutation_Response = {
  __typename?: 'allowed_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Allowed_Roles>;
};

/** input type for inserting object relation for remote table "allowed_roles" */
export type Allowed_Roles_Obj_Rel_Insert_Input = {
  data: Allowed_Roles_Insert_Input;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};

/** on conflict condition type for table "allowed_roles" */
export type Allowed_Roles_On_Conflict = {
  constraint: Allowed_Roles_Constraint;
  update_columns: Array<Allowed_Roles_Update_Column>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "allowed_roles" */
export type Allowed_Roles_Order_By = {
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Roles_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "allowed_roles" */
export type Allowed_Roles_Pk_Columns_Input = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};

/** select columns of table "allowed_roles" */
export enum Allowed_Roles_Select_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "allowed_roles" */
export type Allowed_Roles_Set_Input = {
  role?: Maybe<Roles_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "allowed_roles" */
export enum Allowed_Roles_Update_Column {
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "allowed_roles" */
  delete_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** delete single row from the table: "allowed_roles" */
  delete_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "allowed_roles" */
  insert_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** insert a single row into the table: "allowed_roles" */
  insert_allowed_roles_one?: Maybe<Allowed_Roles>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "allowed_roles" */
  update_allowed_roles?: Maybe<Allowed_Roles_Mutation_Response>;
  /** update single row of the table: "allowed_roles" */
  update_allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Allowed_RolesArgs = {
  where: Allowed_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allowed_RolesArgs = {
  objects: Array<Allowed_Roles_Insert_Input>;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allowed_Roles_OneArgs = {
  object: Allowed_Roles_Insert_Input;
  on_conflict?: Maybe<Allowed_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Allowed_RolesArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  where: Allowed_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allowed_Roles_By_PkArgs = {
  _set?: Maybe<Allowed_Roles_Set_Input>;
  pk_columns: Allowed_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

export enum Roles_Enum {
  User = 'user'
}

/** expression to compare columns of type roles_enum. All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  description?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "allowed_roles" */
  allowed_roles: Array<Allowed_Roles>;
  /** fetch aggregated fields from the table: "allowed_roles" */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  /** fetch data from the table: "allowed_roles" using primary key columns */
  allowed_roles_by_pk?: Maybe<Allowed_Roles>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllowed_Roles_By_PkArgs = {
  role: Roles_Enum;
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregated array relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** An array relationship */
  allowed_roles: Array<Allowed_Roles>;
  /** An aggregated array relationship */
  allowed_roles_aggregate: Allowed_Roles_Aggregate;
  created_at: Scalars['timestamptz'];
  default_role: Roles_Enum;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  role: Roles;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAllowed_RolesArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAllowed_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Allowed_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allowed_Roles_Order_By>>;
  where?: Maybe<Allowed_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  allowed_roles?: Maybe<Allowed_Roles_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<Roles_Enum_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  allowed_roles?: Maybe<Allowed_Roles_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  allowed_roles_aggregate?: Maybe<Allowed_Roles_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Roles_Enum>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};


/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey',
  /** unique or primary key constraint */
  VerificationRequestsTokenKey = 'verification_requests_token_key'
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UserForAuthFragment
  )> }
);

export type CreateVerificationRequestMutationVariables = Exact<{
  config: Verification_Requests_Insert_Input;
}>;


export type CreateVerificationRequestMutation = (
  { __typename?: 'mutation_root' }
  & { insert_verification_requests_one?: Maybe<(
    { __typename?: 'verification_requests' }
    & Pick<Verification_Requests, 'id'>
  )> }
);

export type GetUserByProviderAccountIdQueryVariables = Exact<{
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;


export type GetUserByProviderAccountIdQuery = (
  { __typename?: 'query_root' }
  & { accounts: Array<(
    { __typename?: 'accounts' }
    & { user: (
      { __typename?: 'users' }
      & UserForAuthFragment
    ) }
  )> }
);

export type GetVerificationRequestByIdentifierAndTokenQueryVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;


export type GetVerificationRequestByIdentifierAndTokenQuery = (
  { __typename?: 'query_root' }
  & { verification_requests: Array<(
    { __typename?: 'verification_requests' }
    & Pick<Verification_Requests, 'expires' | 'created_at' | 'updated_at' | 'id' | 'identifier' | 'token'>
  )> }
);

export type DeleteVerificationRequestByIdentifierAndTokenMutationVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;


export type DeleteVerificationRequestByIdentifierAndTokenMutation = (
  { __typename?: 'mutation_root' }
  & { delete_verification_requests?: Maybe<(
    { __typename?: 'verification_requests_mutation_response' }
    & Pick<Verification_Requests_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & UserForAuthFragment
  )> }
);

export type UserForAuthFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'email' | 'email_verified' | 'image' | 'created_at' | 'updated_at' | 'name' | 'default_role'>
  & { allowed_roles: Array<(
    { __typename?: 'allowed_roles' }
    & Pick<Allowed_Roles, 'role'>
  )> }
);

export type CreateUserByEmailMutationVariables = Exact<{
  email: Scalars['String'];
  verified?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
}>;


export type CreateUserByEmailMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & UserForAuthFragment
  )> }
);

export type LinkAccountMutationVariables = Exact<{
  object: Accounts_Insert_Input;
}>;


export type LinkAccountMutation = (
  { __typename?: 'mutation_root' }
  & { insert_accounts_one?: Maybe<(
    { __typename?: 'accounts' }
    & Pick<Accounts, 'id'>
  )> }
);

export type SetTimeEmailVerifiedMutationVariables = Exact<{
  userId: Scalars['uuid'];
  time?: Maybe<Scalars['timestamptz']>;
}>;


export type SetTimeEmailVerifiedMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & UserForAuthFragment
  )> }
);

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteUserByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export const UserForAuthFragmentDoc = gql`
    fragment UserForAuth on users {
  id
  email
  email_verified
  image
  created_at
  updated_at
  name
  default_role
  allowed_roles {
    role
  }
}
    `;
export const GetUserByEmailDocument = gql`
    query getUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}) {
    ...UserForAuth
  }
}
    ${UserForAuthFragmentDoc}`;
export const CreateVerificationRequestDocument = gql`
    mutation createVerificationRequest($config: verification_requests_insert_input!) {
  insert_verification_requests_one(
    object: $config
    on_conflict: {constraint: verification_requests_pkey, update_columns: []}
  ) {
    id
  }
}
    `;
export const GetUserByProviderAccountIdDocument = gql`
    query getUserByProviderAccountId($providerId: String!, $providerAccountId: String!) {
  accounts(
    where: {provider_id: {_eq: $providerId}, _and: {provider_account_id: {_eq: $providerAccountId}}}
  ) {
    user {
      ...UserForAuth
    }
  }
}
    ${UserForAuthFragmentDoc}`;
export const GetVerificationRequestByIdentifierAndTokenDocument = gql`
    query getVerificationRequestByIdentifierAndToken($identifier: String!, $token: String!) {
  verification_requests(
    limit: 1
    where: {identifier: {_eq: $identifier}, _and: {token: {_eq: $token}}}
  ) {
    expires
    created_at
    updated_at
    id
    identifier
    token
  }
}
    `;
export const DeleteVerificationRequestByIdentifierAndTokenDocument = gql`
    mutation deleteVerificationRequestByIdentifierAndToken($identifier: String!, $token: String!) {
  delete_verification_requests(
    where: {identifier: {_eq: $identifier}, _and: {token: {_eq: $token}}}
  ) {
    affected_rows
  }
}
    `;
export const GetUserByIdDocument = gql`
    query getUserById($id: uuid!) {
  users_by_pk(id: $id) {
    ...UserForAuth
  }
}
    ${UserForAuthFragmentDoc}`;
export const CreateUserByEmailDocument = gql`
    mutation createUserByEmail($email: String!, $verified: timestamptz, $name: String, $image: String) {
  insert_users_one(
    on_conflict: {constraint: users_email_key, update_columns: [email_verified]}
    object: {email_verified: $verified, email: $email, name: $name, image: $image, default_role: user, allowed_roles: {data: [{role: user}], on_conflict: {update_columns: [], constraint: allowed_roles_pkey}}}
  ) {
    ...UserForAuth
  }
}
    ${UserForAuthFragmentDoc}`;
export const LinkAccountDocument = gql`
    mutation linkAccount($object: accounts_insert_input!) {
  insert_accounts_one(
    object: $object
    on_conflict: {constraint: accounts_compound_id_key, update_columns: []}
  ) {
    id
  }
}
    `;
export const SetTimeEmailVerifiedDocument = gql`
    mutation setTimeEmailVerified($userId: uuid!, $time: timestamptz) {
  update_users_by_pk(pk_columns: {id: $userId}, _set: {email_verified: $time}) {
    ...UserForAuth
  }
}
    ${UserForAuthFragmentDoc}`;
export const DeleteUserByIdDocument = gql`
    mutation deleteUserById($id: uuid!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUserByEmail(variables: GetUserByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByEmailQuery>(GetUserByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByEmail');
    },
    createVerificationRequest(variables: CreateVerificationRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateVerificationRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateVerificationRequestMutation>(CreateVerificationRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createVerificationRequest');
    },
    getUserByProviderAccountId(variables: GetUserByProviderAccountIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByProviderAccountIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByProviderAccountIdQuery>(GetUserByProviderAccountIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByProviderAccountId');
    },
    getVerificationRequestByIdentifierAndToken(variables: GetVerificationRequestByIdentifierAndTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVerificationRequestByIdentifierAndTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVerificationRequestByIdentifierAndTokenQuery>(GetVerificationRequestByIdentifierAndTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getVerificationRequestByIdentifierAndToken');
    },
    deleteVerificationRequestByIdentifierAndToken(variables: DeleteVerificationRequestByIdentifierAndTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteVerificationRequestByIdentifierAndTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteVerificationRequestByIdentifierAndTokenMutation>(DeleteVerificationRequestByIdentifierAndTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteVerificationRequestByIdentifierAndToken');
    },
    getUserById(variables: GetUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByIdQuery>(GetUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserById');
    },
    createUserByEmail(variables: CreateUserByEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserByEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserByEmailMutation>(CreateUserByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserByEmail');
    },
    linkAccount(variables: LinkAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LinkAccountMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LinkAccountMutation>(LinkAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'linkAccount');
    },
    setTimeEmailVerified(variables: SetTimeEmailVerifiedMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetTimeEmailVerifiedMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetTimeEmailVerifiedMutation>(SetTimeEmailVerifiedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setTimeEmailVerified');
    },
    deleteUserById(variables: DeleteUserByIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserByIdMutation>(DeleteUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserById');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;