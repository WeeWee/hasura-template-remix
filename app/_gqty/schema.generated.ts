/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
}

/** ordering argument of a cursor */
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
}

/** Boolean expression to filter rows from the table "user_pages". All fields are combined with a logical 'AND'. */
export interface user_pages_bool_exp {
  _and?: InputMaybe<Array<user_pages_bool_exp>>;
  _not?: InputMaybe<user_pages_bool_exp>;
  _or?: InputMaybe<Array<user_pages_bool_exp>>;
  id?: InputMaybe<uuid_comparison_exp>;
  images?: InputMaybe<String_comparison_exp>;
  links?: InputMaybe<String_comparison_exp>;
  rewards?: InputMaybe<String_comparison_exp>;
  user_id?: InputMaybe<uuid_comparison_exp>;
  user_id_relation?: InputMaybe<users_bool_exp>;
}

/** unique or primary key constraints on table "user_pages" */
export enum user_pages_constraint {
  /** unique or primary key constraint on columns "id", "user_id" */
  user_pages_id_user_id_key = "user_pages_id_user_id_key",
  /** unique or primary key constraint on columns "id" */
  user_pages_pkey = "user_pages_pkey",
  /** unique or primary key constraint on columns "user_id" */
  user_pages_user_id_key = "user_pages_user_id_key",
}

/** input type for inserting data into table "user_pages" */
export interface user_pages_insert_input {
  id?: InputMaybe<Scalars["uuid"]>;
  images?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Scalars["String"]>;
  rewards?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
  user_id_relation?: InputMaybe<users_obj_rel_insert_input>;
}

/** on_conflict condition type for table "user_pages" */
export interface user_pages_on_conflict {
  constraint: user_pages_constraint;
  update_columns?: Array<user_pages_update_column>;
  where?: InputMaybe<user_pages_bool_exp>;
}

/** Ordering options when selecting data from "user_pages". */
export interface user_pages_order_by {
  id?: InputMaybe<order_by>;
  images?: InputMaybe<order_by>;
  links?: InputMaybe<order_by>;
  rewards?: InputMaybe<order_by>;
  user_id?: InputMaybe<order_by>;
  user_id_relation?: InputMaybe<users_order_by>;
}

/** primary key columns input for table: user_pages */
export interface user_pages_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "user_pages" */
export enum user_pages_select_column {
  /** column name */
  id = "id",
  /** column name */
  images = "images",
  /** column name */
  links = "links",
  /** column name */
  rewards = "rewards",
  /** column name */
  user_id = "user_id",
}

/** input type for updating data in table "user_pages" */
export interface user_pages_set_input {
  id?: InputMaybe<Scalars["uuid"]>;
  images?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Scalars["String"]>;
  rewards?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
}

/** Streaming cursor of the table "user_pages" */
export interface user_pages_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: user_pages_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface user_pages_stream_cursor_value_input {
  id?: InputMaybe<Scalars["uuid"]>;
  images?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Scalars["String"]>;
  rewards?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "user_pages" */
export enum user_pages_update_column {
  /** column name */
  id = "id",
  /** column name */
  images = "images",
  /** column name */
  links = "links",
  /** column name */
  rewards = "rewards",
  /** column name */
  user_id = "user_id",
}

export interface user_pages_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<user_pages_set_input>;
  where: user_pages_bool_exp;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: InputMaybe<Array<users_bool_exp>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<users_bool_exp>>;
  created_at?: InputMaybe<timestamptz_comparison_exp>;
  email?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  provider_id?: InputMaybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "users" */
export enum users_constraint {
  /** unique or primary key constraint on columns "email" */
  users_email_key = "users_email_key",
  /** unique or primary key constraint on columns "id" */
  users_pkey = "users_pkey",
  /** unique or primary key constraint on columns "provider_id" */
  users_provider_id_key = "users_provider_id_key",
}

/** input type for inserting data into table "users" */
export interface users_insert_input {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  provider_id?: InputMaybe<Scalars["String"]>;
}

/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<users_on_conflict>;
}

/** on_conflict condition type for table "users" */
export interface users_on_conflict {
  constraint: users_constraint;
  update_columns?: Array<users_update_column>;
  where?: InputMaybe<users_bool_exp>;
}

/** Ordering options when selecting data from "users". */
export interface users_order_by {
  created_at?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  provider_id?: InputMaybe<order_by>;
}

/** primary key columns input for table: users */
export interface users_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  created_at = "created_at",
  /** column name */
  email = "email",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
  /** column name */
  provider_id = "provider_id",
}

/** input type for updating data in table "users" */
export interface users_set_input {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  provider_id?: InputMaybe<Scalars["String"]>;
}

/** Streaming cursor of the table "users" */
export interface users_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: users_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface users_stream_cursor_value_input {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  provider_id?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "users" */
export enum users_update_column {
  /** column name */
  created_at = "created_at",
  /** column name */
  email = "email",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
  /** column name */
  provider_id = "provider_id",
}

export interface users_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<users_set_input>;
  where: users_bool_exp;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  cursor_ordering: true,
  order_by: true,
  timestamptz: true,
  user_pages_constraint: true,
  user_pages_select_column: true,
  user_pages_update_column: true,
  users_constraint: true,
  users_select_column: true,
  users_update_column: true,
  uuid: true,
};
export const generatedSchema = {
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    delete_user_pages: {
      __type: "user_pages_mutation_response",
      __args: { where: "user_pages_bool_exp!" },
    },
    delete_user_pages_by_pk: { __type: "user_pages", __args: { id: "uuid!" } },
    delete_users: {
      __type: "users_mutation_response",
      __args: { where: "users_bool_exp!" },
    },
    delete_users_by_pk: { __type: "users", __args: { id: "uuid!" } },
    insert_user_pages: {
      __type: "user_pages_mutation_response",
      __args: {
        objects: "[user_pages_insert_input!]!",
        on_conflict: "user_pages_on_conflict",
      },
    },
    insert_user_pages_one: {
      __type: "user_pages",
      __args: {
        object: "user_pages_insert_input!",
        on_conflict: "user_pages_on_conflict",
      },
    },
    insert_users: {
      __type: "users_mutation_response",
      __args: {
        objects: "[users_insert_input!]!",
        on_conflict: "users_on_conflict",
      },
    },
    insert_users_one: {
      __type: "users",
      __args: {
        object: "users_insert_input!",
        on_conflict: "users_on_conflict",
      },
    },
    update_user_pages: {
      __type: "user_pages_mutation_response",
      __args: { _set: "user_pages_set_input", where: "user_pages_bool_exp!" },
    },
    update_user_pages_by_pk: {
      __type: "user_pages",
      __args: {
        _set: "user_pages_set_input",
        pk_columns: "user_pages_pk_columns_input!",
      },
    },
    update_user_pages_many: {
      __type: "[user_pages_mutation_response]",
      __args: { updates: "[user_pages_updates!]!" },
    },
    update_users: {
      __type: "users_mutation_response",
      __args: { _set: "users_set_input", where: "users_bool_exp!" },
    },
    update_users_by_pk: {
      __type: "users",
      __args: {
        _set: "users_set_input",
        pk_columns: "users_pk_columns_input!",
      },
    },
    update_users_many: {
      __type: "[users_mutation_response]",
      __args: { updates: "[users_updates!]!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    user_pages: {
      __type: "[user_pages!]!",
      __args: {
        distinct_on: "[user_pages_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[user_pages_order_by!]",
        where: "user_pages_bool_exp",
      },
    },
    user_pages_aggregate: {
      __type: "user_pages_aggregate!",
      __args: {
        distinct_on: "[user_pages_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[user_pages_order_by!]",
        where: "user_pages_bool_exp",
      },
    },
    user_pages_by_pk: { __type: "user_pages", __args: { id: "uuid!" } },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users_aggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users_by_pk: { __type: "users", __args: { id: "uuid!" } },
  },
  subscription: {
    __typename: { __type: "String!" },
    user_pages: {
      __type: "[user_pages!]!",
      __args: {
        distinct_on: "[user_pages_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[user_pages_order_by!]",
        where: "user_pages_bool_exp",
      },
    },
    user_pages_aggregate: {
      __type: "user_pages_aggregate!",
      __args: {
        distinct_on: "[user_pages_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[user_pages_order_by!]",
        where: "user_pages_bool_exp",
      },
    },
    user_pages_by_pk: { __type: "user_pages", __args: { id: "uuid!" } },
    user_pages_stream: {
      __type: "[user_pages!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[user_pages_stream_cursor_input]!",
        where: "user_pages_bool_exp",
      },
    },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users_aggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users_by_pk: { __type: "users", __args: { id: "uuid!" } },
    users_stream: {
      __type: "[users!]!",
      __args: {
        batch_size: "Int!",
        cursor: "[users_stream_cursor_input]!",
        where: "users_bool_exp",
      },
    },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: "timestamptz" },
    _gt: { __type: "timestamptz" },
    _gte: { __type: "timestamptz" },
    _in: { __type: "[timestamptz!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "timestamptz" },
    _lte: { __type: "timestamptz" },
    _neq: { __type: "timestamptz" },
    _nin: { __type: "[timestamptz!]" },
  },
  user_pages: {
    __typename: { __type: "String!" },
    id: { __type: "uuid!" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid!" },
    user_id_relation: { __type: "users" },
  },
  user_pages_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "user_pages_aggregate_fields" },
    nodes: { __type: "[user_pages!]!" },
  },
  user_pages_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[user_pages_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "user_pages_max_fields" },
    min: { __type: "user_pages_min_fields" },
  },
  user_pages_bool_exp: {
    _and: { __type: "[user_pages_bool_exp!]" },
    _not: { __type: "user_pages_bool_exp" },
    _or: { __type: "[user_pages_bool_exp!]" },
    id: { __type: "uuid_comparison_exp" },
    images: { __type: "String_comparison_exp" },
    links: { __type: "String_comparison_exp" },
    rewards: { __type: "String_comparison_exp" },
    user_id: { __type: "uuid_comparison_exp" },
    user_id_relation: { __type: "users_bool_exp" },
  },
  user_pages_insert_input: {
    id: { __type: "uuid" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid" },
    user_id_relation: { __type: "users_obj_rel_insert_input" },
  },
  user_pages_max_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid" },
  },
  user_pages_min_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid" },
  },
  user_pages_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[user_pages!]!" },
  },
  user_pages_on_conflict: {
    constraint: { __type: "user_pages_constraint!" },
    update_columns: { __type: "[user_pages_update_column!]!" },
    where: { __type: "user_pages_bool_exp" },
  },
  user_pages_order_by: {
    id: { __type: "order_by" },
    images: { __type: "order_by" },
    links: { __type: "order_by" },
    rewards: { __type: "order_by" },
    user_id: { __type: "order_by" },
    user_id_relation: { __type: "users_order_by" },
  },
  user_pages_pk_columns_input: { id: { __type: "uuid!" } },
  user_pages_set_input: {
    id: { __type: "uuid" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid" },
  },
  user_pages_stream_cursor_input: {
    initial_value: { __type: "user_pages_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  user_pages_stream_cursor_value_input: {
    id: { __type: "uuid" },
    images: { __type: "String" },
    links: { __type: "String" },
    rewards: { __type: "String" },
    user_id: { __type: "uuid" },
  },
  user_pages_updates: {
    _set: { __type: "user_pages_set_input" },
    where: { __type: "user_pages_bool_exp!" },
  },
  users: {
    __typename: { __type: "String!" },
    created_at: { __type: "timestamptz!" },
    email: { __type: "String!" },
    id: { __type: "uuid!" },
    name: { __type: "String!" },
    provider_id: { __type: "String" },
  },
  users_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "users_aggregate_fields" },
    nodes: { __type: "[users!]!" },
  },
  users_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[users_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "users_max_fields" },
    min: { __type: "users_min_fields" },
  },
  users_bool_exp: {
    _and: { __type: "[users_bool_exp!]" },
    _not: { __type: "users_bool_exp" },
    _or: { __type: "[users_bool_exp!]" },
    created_at: { __type: "timestamptz_comparison_exp" },
    email: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    name: { __type: "String_comparison_exp" },
    provider_id: { __type: "String_comparison_exp" },
  },
  users_insert_input: {
    created_at: { __type: "timestamptz" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    provider_id: { __type: "String" },
  },
  users_max_fields: {
    __typename: { __type: "String!" },
    created_at: { __type: "timestamptz" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    provider_id: { __type: "String" },
  },
  users_min_fields: {
    __typename: { __type: "String!" },
    created_at: { __type: "timestamptz" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    provider_id: { __type: "String" },
  },
  users_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[users!]!" },
  },
  users_obj_rel_insert_input: {
    data: { __type: "users_insert_input!" },
    on_conflict: { __type: "users_on_conflict" },
  },
  users_on_conflict: {
    constraint: { __type: "users_constraint!" },
    update_columns: { __type: "[users_update_column!]!" },
    where: { __type: "users_bool_exp" },
  },
  users_order_by: {
    created_at: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
    provider_id: { __type: "order_by" },
  },
  users_pk_columns_input: { id: { __type: "uuid!" } },
  users_set_input: {
    created_at: { __type: "timestamptz" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    provider_id: { __type: "String" },
  },
  users_stream_cursor_input: {
    initial_value: { __type: "users_stream_cursor_value_input!" },
    ordering: { __type: "cursor_ordering" },
  },
  users_stream_cursor_value_input: {
    created_at: { __type: "timestamptz" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    provider_id: { __type: "String" },
  },
  users_updates: {
    _set: { __type: "users_set_input" },
    where: { __type: "users_bool_exp!" },
  },
  uuid_comparison_exp: {
    _eq: { __type: "uuid" },
    _gt: { __type: "uuid" },
    _gte: { __type: "uuid" },
    _in: { __type: "[uuid!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "uuid" },
    _lte: { __type: "uuid" },
    _neq: { __type: "uuid" },
    _nin: { __type: "[uuid!]" },
  },
} as const;

export interface Mutation {
  __typename?: "Mutation";
  delete_user_pages: (args: {
    where: user_pages_bool_exp;
  }) => Maybe<user_pages_mutation_response>;
  delete_user_pages_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<user_pages>;
  delete_users: (args: {
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  delete_users_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  insert_user_pages: (args: {
    objects: Array<user_pages_insert_input>;
    on_conflict?: Maybe<user_pages_on_conflict>;
  }) => Maybe<user_pages_mutation_response>;
  insert_user_pages_one: (args: {
    object: user_pages_insert_input;
    on_conflict?: Maybe<user_pages_on_conflict>;
  }) => Maybe<user_pages>;
  insert_users: (args: {
    objects: Array<users_insert_input>;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users_mutation_response>;
  insert_users_one: (args: {
    object: users_insert_input;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users>;
  update_user_pages: (args: {
    _set?: Maybe<user_pages_set_input>;
    where: user_pages_bool_exp;
  }) => Maybe<user_pages_mutation_response>;
  update_user_pages_by_pk: (args: {
    _set?: Maybe<user_pages_set_input>;
    pk_columns: user_pages_pk_columns_input;
  }) => Maybe<user_pages>;
  update_user_pages_many: (args: {
    updates: Array<user_pages_updates>;
  }) => Maybe<Array<Maybe<user_pages_mutation_response>>>;
  update_users: (args: {
    _set?: Maybe<users_set_input>;
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  update_users_by_pk: (args: {
    _set?: Maybe<users_set_input>;
    pk_columns: users_pk_columns_input;
  }) => Maybe<users>;
  update_users_many: (args: {
    updates: Array<users_updates>;
  }) => Maybe<Array<Maybe<users_mutation_response>>>;
}

export interface Query {
  __typename?: "Query";
  user_pages: (args?: {
    distinct_on?: Maybe<Array<user_pages_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<user_pages_order_by>>;
    where?: Maybe<user_pages_bool_exp>;
  }) => Array<user_pages>;
  user_pages_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_pages_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<user_pages_order_by>>;
    where?: Maybe<user_pages_bool_exp>;
  }) => user_pages_aggregate;
  user_pages_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<user_pages>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  users_aggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
  users_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<users>;
}

export interface Subscription {
  __typename?: "Subscription";
  user_pages: (args?: {
    distinct_on?: Maybe<Array<user_pages_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<user_pages_order_by>>;
    where?: Maybe<user_pages_bool_exp>;
  }) => Array<user_pages>;
  user_pages_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_pages_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<user_pages_order_by>>;
    where?: Maybe<user_pages_bool_exp>;
  }) => user_pages_aggregate;
  user_pages_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<user_pages>;
  user_pages_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<user_pages_stream_cursor_input>>;
    where?: Maybe<user_pages_bool_exp>;
  }) => Array<user_pages>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  users_aggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
  users_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  users_stream: (args: {
    batch_size: Scalars["Int"];
    cursor: Array<Maybe<users_stream_cursor_input>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
}

/**
 * columns and relationships of "user_pages"
 */
export interface user_pages {
  __typename?: "user_pages";
  id: ScalarsEnums["uuid"];
  images?: Maybe<ScalarsEnums["String"]>;
  links?: Maybe<ScalarsEnums["String"]>;
  rewards?: Maybe<ScalarsEnums["String"]>;
  user_id: ScalarsEnums["uuid"];
  /**
   * An object relationship
   */
  user_id_relation?: Maybe<users>;
}

/**
 * aggregated selection of "user_pages"
 */
export interface user_pages_aggregate {
  __typename?: "user_pages_aggregate";
  aggregate?: Maybe<user_pages_aggregate_fields>;
  nodes: Array<user_pages>;
}

/**
 * aggregate fields of "user_pages"
 */
export interface user_pages_aggregate_fields {
  __typename?: "user_pages_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<user_pages_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<user_pages_max_fields>;
  min?: Maybe<user_pages_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface user_pages_max_fields {
  __typename?: "user_pages_max_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
  images?: Maybe<ScalarsEnums["String"]>;
  links?: Maybe<ScalarsEnums["String"]>;
  rewards?: Maybe<ScalarsEnums["String"]>;
  user_id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface user_pages_min_fields {
  __typename?: "user_pages_min_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
  images?: Maybe<ScalarsEnums["String"]>;
  links?: Maybe<ScalarsEnums["String"]>;
  rewards?: Maybe<ScalarsEnums["String"]>;
  user_id?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "user_pages"
 */
export interface user_pages_mutation_response {
  __typename?: "user_pages_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<user_pages>;
}

/**
 * columns and relationships of "users"
 */
export interface users {
  __typename?: "users";
  created_at: ScalarsEnums["timestamptz"];
  email: ScalarsEnums["String"];
  id: ScalarsEnums["uuid"];
  name: ScalarsEnums["String"];
  provider_id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregated selection of "users"
 */
export interface users_aggregate {
  __typename?: "users_aggregate";
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
}

/**
 * aggregate fields of "users"
 */
export interface users_aggregate_fields {
  __typename?: "users_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<users_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface users_max_fields {
  __typename?: "users_max_fields";
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  provider_id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface users_min_fields {
  __typename?: "users_min_fields";
  created_at?: Maybe<ScalarsEnums["timestamptz"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  provider_id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "users"
 */
export interface users_mutation_response {
  __typename?: "users_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<users>;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  user_pages: user_pages;
  user_pages_aggregate: user_pages_aggregate;
  user_pages_aggregate_fields: user_pages_aggregate_fields;
  user_pages_max_fields: user_pages_max_fields;
  user_pages_min_fields: user_pages_min_fields;
  user_pages_mutation_response: user_pages_mutation_response;
  users: users;
  users_aggregate: users_aggregate;
  users_aggregate_fields: users_aggregate_fields;
  users_max_fields: users_max_fields;
  users_min_fields: users_min_fields;
  users_mutation_response: users_mutation_response;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "user_pages"
  | "user_pages_aggregate"
  | "user_pages_aggregate_fields"
  | "user_pages_max_fields"
  | "user_pages_min_fields"
  | "user_pages_mutation_response"
  | "users"
  | "users_aggregate"
  | "users_aggregate_fields"
  | "users_max_fields"
  | "users_min_fields"
  | "users_mutation_response";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  cursor_ordering: cursor_ordering | undefined;
  order_by: order_by | undefined;
  user_pages_constraint: user_pages_constraint | undefined;
  user_pages_select_column: user_pages_select_column | undefined;
  user_pages_update_column: user_pages_update_column | undefined;
  users_constraint: users_constraint | undefined;
  users_select_column: users_select_column | undefined;
  users_update_column: users_update_column | undefined;
}
