/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEvolinciteCompetence = /* GraphQL */ `mutation CreateEvolinciteCompetence(
  $input: CreateEvolinciteCompetenceInput!
  $condition: ModelEvolinciteCompetenceConditionInput
) {
  createEvolinciteCompetence(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCompetenceEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCompetenceMutationVariables,
  APITypes.CreateEvolinciteCompetenceMutation
>;
export const updateEvolinciteCompetence = /* GraphQL */ `mutation UpdateEvolinciteCompetence(
  $input: UpdateEvolinciteCompetenceInput!
  $condition: ModelEvolinciteCompetenceConditionInput
) {
  updateEvolinciteCompetence(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCompetenceEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCompetenceMutationVariables,
  APITypes.UpdateEvolinciteCompetenceMutation
>;
export const deleteEvolinciteCompetence = /* GraphQL */ `mutation DeleteEvolinciteCompetence(
  $input: DeleteEvolinciteCompetenceInput!
  $condition: ModelEvolinciteCompetenceConditionInput
) {
  deleteEvolinciteCompetence(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCompetenceEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCompetenceMutationVariables,
  APITypes.DeleteEvolinciteCompetenceMutation
>;
export const createEvolinciteCourse = /* GraphQL */ `mutation CreateEvolinciteCourse(
  $input: CreateEvolinciteCourseInput!
  $condition: ModelEvolinciteCourseConditionInput
) {
  createEvolinciteCourse(input: $input, condition: $condition) {
    id
    name
    description
    durationUnit
    duration
    objectives
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCourseEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCourseMutationVariables,
  APITypes.CreateEvolinciteCourseMutation
>;
export const updateEvolinciteCourse = /* GraphQL */ `mutation UpdateEvolinciteCourse(
  $input: UpdateEvolinciteCourseInput!
  $condition: ModelEvolinciteCourseConditionInput
) {
  updateEvolinciteCourse(input: $input, condition: $condition) {
    id
    name
    description
    durationUnit
    duration
    objectives
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCourseEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCourseMutationVariables,
  APITypes.UpdateEvolinciteCourseMutation
>;
export const deleteEvolinciteCourse = /* GraphQL */ `mutation DeleteEvolinciteCourse(
  $input: DeleteEvolinciteCourseInput!
  $condition: ModelEvolinciteCourseConditionInput
) {
  deleteEvolinciteCourse(input: $input, condition: $condition) {
    id
    name
    description
    durationUnit
    duration
    objectives
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCourseEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCourseMutationVariables,
  APITypes.DeleteEvolinciteCourseMutation
>;
export const createEvolinciteSyllabus = /* GraphQL */ `mutation CreateEvolinciteSyllabus(
  $input: CreateEvolinciteSyllabusInput!
  $condition: ModelEvolinciteSyllabusConditionInput
) {
  createEvolinciteSyllabus(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteCompetence {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteCompetenceEvolinciteSyllabusId
      __typename
    }
    createdAt
    updatedAt
    evolinciteSyllabusEvolinciteCompetenceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteSyllabusMutationVariables,
  APITypes.CreateEvolinciteSyllabusMutation
>;
export const updateEvolinciteSyllabus = /* GraphQL */ `mutation UpdateEvolinciteSyllabus(
  $input: UpdateEvolinciteSyllabusInput!
  $condition: ModelEvolinciteSyllabusConditionInput
) {
  updateEvolinciteSyllabus(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteCompetence {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteCompetenceEvolinciteSyllabusId
      __typename
    }
    createdAt
    updatedAt
    evolinciteSyllabusEvolinciteCompetenceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteSyllabusMutationVariables,
  APITypes.UpdateEvolinciteSyllabusMutation
>;
export const deleteEvolinciteSyllabus = /* GraphQL */ `mutation DeleteEvolinciteSyllabus(
  $input: DeleteEvolinciteSyllabusInput!
  $condition: ModelEvolinciteSyllabusConditionInput
) {
  deleteEvolinciteSyllabus(input: $input, condition: $condition) {
    id
    name
    description
    content
    application
    state
    EvolinciteCompetence {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteCompetenceEvolinciteSyllabusId
      __typename
    }
    createdAt
    updatedAt
    evolinciteSyllabusEvolinciteCompetenceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteSyllabusMutationVariables,
  APITypes.DeleteEvolinciteSyllabusMutation
>;
export const createEvolinciteUserAnswers = /* GraphQL */ `mutation CreateEvolinciteUserAnswers(
  $input: CreateEvolinciteUserAnswersInput!
  $condition: ModelEvolinciteUserAnswersConditionInput
) {
  createEvolinciteUserAnswers(input: $input, condition: $condition) {
    id
    answers
    application
    state
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteUserAnswersEvolinciteUserId
    evolinciteUserAnswersEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserAnswersMutationVariables,
  APITypes.CreateEvolinciteUserAnswersMutation
>;
export const updateEvolinciteUserAnswers = /* GraphQL */ `mutation UpdateEvolinciteUserAnswers(
  $input: UpdateEvolinciteUserAnswersInput!
  $condition: ModelEvolinciteUserAnswersConditionInput
) {
  updateEvolinciteUserAnswers(input: $input, condition: $condition) {
    id
    answers
    application
    state
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteUserAnswersEvolinciteUserId
    evolinciteUserAnswersEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserAnswersMutationVariables,
  APITypes.UpdateEvolinciteUserAnswersMutation
>;
export const deleteEvolinciteUserAnswers = /* GraphQL */ `mutation DeleteEvolinciteUserAnswers(
  $input: DeleteEvolinciteUserAnswersInput!
  $condition: ModelEvolinciteUserAnswersConditionInput
) {
  deleteEvolinciteUserAnswers(input: $input, condition: $condition) {
    id
    answers
    application
    state
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteUserAnswersEvolinciteUserId
    evolinciteUserAnswersEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserAnswersMutationVariables,
  APITypes.DeleteEvolinciteUserAnswersMutation
>;
export const createEvolinciteProcessType = /* GraphQL */ `mutation CreateEvolinciteProcessType(
  $input: CreateEvolinciteProcessTypeInput!
  $condition: ModelEvolinciteProcessTypeConditionInput
) {
  createEvolinciteProcessType(input: $input, condition: $condition) {
    id
    name
    order
    sellerCommission
    referrerCommission
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteProcessTypeMutationVariables,
  APITypes.CreateEvolinciteProcessTypeMutation
>;
export const updateEvolinciteProcessType = /* GraphQL */ `mutation UpdateEvolinciteProcessType(
  $input: UpdateEvolinciteProcessTypeInput!
  $condition: ModelEvolinciteProcessTypeConditionInput
) {
  updateEvolinciteProcessType(input: $input, condition: $condition) {
    id
    name
    order
    sellerCommission
    referrerCommission
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteProcessTypeMutationVariables,
  APITypes.UpdateEvolinciteProcessTypeMutation
>;
export const deleteEvolinciteProcessType = /* GraphQL */ `mutation DeleteEvolinciteProcessType(
  $input: DeleteEvolinciteProcessTypeInput!
  $condition: ModelEvolinciteProcessTypeConditionInput
) {
  deleteEvolinciteProcessType(input: $input, condition: $condition) {
    id
    name
    order
    sellerCommission
    referrerCommission
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteProcessTypeMutationVariables,
  APITypes.DeleteEvolinciteProcessTypeMutation
>;
export const createEvolinciteExpenseType = /* GraphQL */ `mutation CreateEvolinciteExpenseType(
  $input: CreateEvolinciteExpenseTypeInput!
  $condition: ModelEvolinciteExpenseTypeConditionInput
) {
  createEvolinciteExpenseType(input: $input, condition: $condition) {
    id
    name
    type
    setting
    state
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteCompanyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteExpenseTypeMutationVariables,
  APITypes.CreateEvolinciteExpenseTypeMutation
>;
export const updateEvolinciteExpenseType = /* GraphQL */ `mutation UpdateEvolinciteExpenseType(
  $input: UpdateEvolinciteExpenseTypeInput!
  $condition: ModelEvolinciteExpenseTypeConditionInput
) {
  updateEvolinciteExpenseType(input: $input, condition: $condition) {
    id
    name
    type
    setting
    state
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteCompanyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteExpenseTypeMutationVariables,
  APITypes.UpdateEvolinciteExpenseTypeMutation
>;
export const deleteEvolinciteExpenseType = /* GraphQL */ `mutation DeleteEvolinciteExpenseType(
  $input: DeleteEvolinciteExpenseTypeInput!
  $condition: ModelEvolinciteExpenseTypeConditionInput
) {
  deleteEvolinciteExpenseType(input: $input, condition: $condition) {
    id
    name
    type
    setting
    state
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteCompanyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteExpenseTypeMutationVariables,
  APITypes.DeleteEvolinciteExpenseTypeMutation
>;
export const createEvolinciteExpense = /* GraphQL */ `mutation CreateEvolinciteExpense(
  $input: CreateEvolinciteExpenseInput!
  $condition: ModelEvolinciteExpenseConditionInput
) {
  createEvolinciteExpense(input: $input, condition: $condition) {
    id
    amount
    process
    expenseState
    expenseDate
    observations
    voucher
    transactionType
    reference
    state
    evolinciteExpenseTypeID
    EvolinciteExpenseType {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteExpenseMutationVariables,
  APITypes.CreateEvolinciteExpenseMutation
>;
export const updateEvolinciteExpense = /* GraphQL */ `mutation UpdateEvolinciteExpense(
  $input: UpdateEvolinciteExpenseInput!
  $condition: ModelEvolinciteExpenseConditionInput
) {
  updateEvolinciteExpense(input: $input, condition: $condition) {
    id
    amount
    process
    expenseState
    expenseDate
    observations
    voucher
    transactionType
    reference
    state
    evolinciteExpenseTypeID
    EvolinciteExpenseType {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteExpenseMutationVariables,
  APITypes.UpdateEvolinciteExpenseMutation
>;
export const deleteEvolinciteExpense = /* GraphQL */ `mutation DeleteEvolinciteExpense(
  $input: DeleteEvolinciteExpenseInput!
  $condition: ModelEvolinciteExpenseConditionInput
) {
  deleteEvolinciteExpense(input: $input, condition: $condition) {
    id
    amount
    process
    expenseState
    expenseDate
    observations
    voucher
    transactionType
    reference
    state
    evolinciteExpenseTypeID
    EvolinciteExpenseType {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteExpenseMutationVariables,
  APITypes.DeleteEvolinciteExpenseMutation
>;
export const createEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `mutation CreateEvolinciteUserEvolinciteJobTitle(
  $input: CreateEvolinciteUserEvolinciteJobTitleInput!
  $condition: ModelEvolinciteUserEvolinciteJobTitleConditionInput
) {
  createEvolinciteUserEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    state
    evolinciteJobTitleID
    EvolinciteJobTitle {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserEvolinciteJobTitleMutationVariables,
  APITypes.CreateEvolinciteUserEvolinciteJobTitleMutation
>;
export const updateEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `mutation UpdateEvolinciteUserEvolinciteJobTitle(
  $input: UpdateEvolinciteUserEvolinciteJobTitleInput!
  $condition: ModelEvolinciteUserEvolinciteJobTitleConditionInput
) {
  updateEvolinciteUserEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    state
    evolinciteJobTitleID
    EvolinciteJobTitle {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserEvolinciteJobTitleMutationVariables,
  APITypes.UpdateEvolinciteUserEvolinciteJobTitleMutation
>;
export const deleteEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `mutation DeleteEvolinciteUserEvolinciteJobTitle(
  $input: DeleteEvolinciteUserEvolinciteJobTitleInput!
  $condition: ModelEvolinciteUserEvolinciteJobTitleConditionInput
) {
  deleteEvolinciteUserEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    state
    evolinciteJobTitleID
    EvolinciteJobTitle {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserEvolinciteJobTitleMutationVariables,
  APITypes.DeleteEvolinciteUserEvolinciteJobTitleMutation
>;
export const createEvolinciteJobTitle = /* GraphQL */ `mutation CreateEvolinciteJobTitle(
  $input: CreateEvolinciteJobTitleInput!
  $condition: ModelEvolinciteJobTitleConditionInput
) {
  createEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    name
    salary
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteJobTitleMutationVariables,
  APITypes.CreateEvolinciteJobTitleMutation
>;
export const updateEvolinciteJobTitle = /* GraphQL */ `mutation UpdateEvolinciteJobTitle(
  $input: UpdateEvolinciteJobTitleInput!
  $condition: ModelEvolinciteJobTitleConditionInput
) {
  updateEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    name
    salary
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteJobTitleMutationVariables,
  APITypes.UpdateEvolinciteJobTitleMutation
>;
export const deleteEvolinciteJobTitle = /* GraphQL */ `mutation DeleteEvolinciteJobTitle(
  $input: DeleteEvolinciteJobTitleInput!
  $condition: ModelEvolinciteJobTitleConditionInput
) {
  deleteEvolinciteJobTitle(input: $input, condition: $condition) {
    id
    name
    salary
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteJobTitleMutationVariables,
  APITypes.DeleteEvolinciteJobTitleMutation
>;
export const createEvolinciteWalletPayment = /* GraphQL */ `mutation CreateEvolinciteWalletPayment(
  $input: CreateEvolinciteWalletPaymentInput!
  $condition: ModelEvolinciteWalletPaymentConditionInput
) {
  createEvolinciteWalletPayment(input: $input, condition: $condition) {
    id
    amount
    scheduledDate
    datePayment
    paymentStatus
    prePayment
    postPayment
    observations
    voucher
    transactionType
    reference
    amountInterest
    amountCollection
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteWalletPaymentMutationVariables,
  APITypes.CreateEvolinciteWalletPaymentMutation
>;
export const updateEvolinciteWalletPayment = /* GraphQL */ `mutation UpdateEvolinciteWalletPayment(
  $input: UpdateEvolinciteWalletPaymentInput!
  $condition: ModelEvolinciteWalletPaymentConditionInput
) {
  updateEvolinciteWalletPayment(input: $input, condition: $condition) {
    id
    amount
    scheduledDate
    datePayment
    paymentStatus
    prePayment
    postPayment
    observations
    voucher
    transactionType
    reference
    amountInterest
    amountCollection
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteWalletPaymentMutationVariables,
  APITypes.UpdateEvolinciteWalletPaymentMutation
>;
export const deleteEvolinciteWalletPayment = /* GraphQL */ `mutation DeleteEvolinciteWalletPayment(
  $input: DeleteEvolinciteWalletPaymentInput!
  $condition: ModelEvolinciteWalletPaymentConditionInput
) {
  deleteEvolinciteWalletPayment(input: $input, condition: $condition) {
    id
    amount
    scheduledDate
    datePayment
    paymentStatus
    prePayment
    postPayment
    observations
    voucher
    transactionType
    reference
    amountInterest
    amountCollection
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteWalletPaymentMutationVariables,
  APITypes.DeleteEvolinciteWalletPaymentMutation
>;
export const createEvolinciteCrmNegotiationField = /* GraphQL */ `mutation CreateEvolinciteCrmNegotiationField(
  $input: CreateEvolinciteCrmNegotiationFieldInput!
  $condition: ModelEvolinciteCrmNegotiationFieldConditionInput
) {
  createEvolinciteCrmNegotiationField(input: $input, condition: $condition) {
    id
    field
    type
    required
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmNegotiationSectionID
    EvolinciteCrmNegotiationSection {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmNegotiationFieldMutationVariables,
  APITypes.CreateEvolinciteCrmNegotiationFieldMutation
>;
export const updateEvolinciteCrmNegotiationField = /* GraphQL */ `mutation UpdateEvolinciteCrmNegotiationField(
  $input: UpdateEvolinciteCrmNegotiationFieldInput!
  $condition: ModelEvolinciteCrmNegotiationFieldConditionInput
) {
  updateEvolinciteCrmNegotiationField(input: $input, condition: $condition) {
    id
    field
    type
    required
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmNegotiationSectionID
    EvolinciteCrmNegotiationSection {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmNegotiationFieldMutationVariables,
  APITypes.UpdateEvolinciteCrmNegotiationFieldMutation
>;
export const deleteEvolinciteCrmNegotiationField = /* GraphQL */ `mutation DeleteEvolinciteCrmNegotiationField(
  $input: DeleteEvolinciteCrmNegotiationFieldInput!
  $condition: ModelEvolinciteCrmNegotiationFieldConditionInput
) {
  deleteEvolinciteCrmNegotiationField(input: $input, condition: $condition) {
    id
    field
    type
    required
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmNegotiationSectionID
    EvolinciteCrmNegotiationSection {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmNegotiationFieldMutationVariables,
  APITypes.DeleteEvolinciteCrmNegotiationFieldMutation
>;
export const createEvolinciteCrmNegotiationSection = /* GraphQL */ `mutation CreateEvolinciteCrmNegotiationSection(
  $input: CreateEvolinciteCrmNegotiationSectionInput!
  $condition: ModelEvolinciteCrmNegotiationSectionConditionInput
) {
  createEvolinciteCrmNegotiationSection(input: $input, condition: $condition) {
    id
    name
    order
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmNegotiationSectionMutationVariables,
  APITypes.CreateEvolinciteCrmNegotiationSectionMutation
>;
export const updateEvolinciteCrmNegotiationSection = /* GraphQL */ `mutation UpdateEvolinciteCrmNegotiationSection(
  $input: UpdateEvolinciteCrmNegotiationSectionInput!
  $condition: ModelEvolinciteCrmNegotiationSectionConditionInput
) {
  updateEvolinciteCrmNegotiationSection(input: $input, condition: $condition) {
    id
    name
    order
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmNegotiationSectionMutationVariables,
  APITypes.UpdateEvolinciteCrmNegotiationSectionMutation
>;
export const deleteEvolinciteCrmNegotiationSection = /* GraphQL */ `mutation DeleteEvolinciteCrmNegotiationSection(
  $input: DeleteEvolinciteCrmNegotiationSectionInput!
  $condition: ModelEvolinciteCrmNegotiationSectionConditionInput
) {
  deleteEvolinciteCrmNegotiationSection(input: $input, condition: $condition) {
    id
    name
    order
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmNegotiationSectionMutationVariables,
  APITypes.DeleteEvolinciteCrmNegotiationSectionMutation
>;
export const createEvolinciteCrmAutomation = /* GraphQL */ `mutation CreateEvolinciteCrmAutomation(
  $input: CreateEvolinciteCrmAutomationInput!
  $condition: ModelEvolinciteCrmAutomationConditionInput
) {
  createEvolinciteCrmAutomation(input: $input, condition: $condition) {
    id
    name
    rule
    setting
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmAutomationMutationVariables,
  APITypes.CreateEvolinciteCrmAutomationMutation
>;
export const updateEvolinciteCrmAutomation = /* GraphQL */ `mutation UpdateEvolinciteCrmAutomation(
  $input: UpdateEvolinciteCrmAutomationInput!
  $condition: ModelEvolinciteCrmAutomationConditionInput
) {
  updateEvolinciteCrmAutomation(input: $input, condition: $condition) {
    id
    name
    rule
    setting
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmAutomationMutationVariables,
  APITypes.UpdateEvolinciteCrmAutomationMutation
>;
export const deleteEvolinciteCrmAutomation = /* GraphQL */ `mutation DeleteEvolinciteCrmAutomation(
  $input: DeleteEvolinciteCrmAutomationInput!
  $condition: ModelEvolinciteCrmAutomationConditionInput
) {
  deleteEvolinciteCrmAutomation(input: $input, condition: $condition) {
    id
    name
    rule
    setting
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmAutomationMutationVariables,
  APITypes.DeleteEvolinciteCrmAutomationMutation
>;
export const createEvolinciteComment = /* GraphQL */ `mutation CreateEvolinciteComment(
  $input: CreateEvolinciteCommentInput!
  $condition: ModelEvolinciteCommentConditionInput
) {
  createEvolinciteComment(input: $input, condition: $condition) {
    id
    files
    content
    pinned
    state
    evolinciteUserID
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCommentMutationVariables,
  APITypes.CreateEvolinciteCommentMutation
>;
export const updateEvolinciteComment = /* GraphQL */ `mutation UpdateEvolinciteComment(
  $input: UpdateEvolinciteCommentInput!
  $condition: ModelEvolinciteCommentConditionInput
) {
  updateEvolinciteComment(input: $input, condition: $condition) {
    id
    files
    content
    pinned
    state
    evolinciteUserID
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCommentMutationVariables,
  APITypes.UpdateEvolinciteCommentMutation
>;
export const deleteEvolinciteComment = /* GraphQL */ `mutation DeleteEvolinciteComment(
  $input: DeleteEvolinciteCommentInput!
  $condition: ModelEvolinciteCommentConditionInput
) {
  deleteEvolinciteComment(input: $input, condition: $condition) {
    id
    files
    content
    pinned
    state
    evolinciteUserID
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCommentMutationVariables,
  APITypes.DeleteEvolinciteCommentMutation
>;
export const createEvolinciteActivity = /* GraphQL */ `mutation CreateEvolinciteActivity(
  $input: CreateEvolinciteActivityInput!
  $condition: ModelEvolinciteActivityConditionInput
) {
  createEvolinciteActivity(input: $input, condition: $condition) {
    id
    name
    description
    startDate
    endDate
    color
    type
    priority
    meta
    taskState
    documents
    state
    evolinciteUserID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    Participants {
      nextToken
      __typename
    }
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteActivityMutationVariables,
  APITypes.CreateEvolinciteActivityMutation
>;
export const updateEvolinciteActivity = /* GraphQL */ `mutation UpdateEvolinciteActivity(
  $input: UpdateEvolinciteActivityInput!
  $condition: ModelEvolinciteActivityConditionInput
) {
  updateEvolinciteActivity(input: $input, condition: $condition) {
    id
    name
    description
    startDate
    endDate
    color
    type
    priority
    meta
    taskState
    documents
    state
    evolinciteUserID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    Participants {
      nextToken
      __typename
    }
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteActivityMutationVariables,
  APITypes.UpdateEvolinciteActivityMutation
>;
export const deleteEvolinciteActivity = /* GraphQL */ `mutation DeleteEvolinciteActivity(
  $input: DeleteEvolinciteActivityInput!
  $condition: ModelEvolinciteActivityConditionInput
) {
  deleteEvolinciteActivity(input: $input, condition: $condition) {
    id
    name
    description
    startDate
    endDate
    color
    type
    priority
    meta
    taskState
    documents
    state
    evolinciteUserID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    Participants {
      nextToken
      __typename
    }
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteActivityMutationVariables,
  APITypes.DeleteEvolinciteActivityMutation
>;
export const createEvolincitePermissions = /* GraphQL */ `mutation CreateEvolincitePermissions(
  $input: CreateEvolincitePermissionsInput!
  $condition: ModelEvolincitePermissionsConditionInput
) {
  createEvolincitePermissions(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    evolinciteUserID
    evolinciteDepartmentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteRolID
    EvolinciteRol {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolincitePermissionsMutationVariables,
  APITypes.CreateEvolincitePermissionsMutation
>;
export const updateEvolincitePermissions = /* GraphQL */ `mutation UpdateEvolincitePermissions(
  $input: UpdateEvolincitePermissionsInput!
  $condition: ModelEvolincitePermissionsConditionInput
) {
  updateEvolincitePermissions(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    evolinciteUserID
    evolinciteDepartmentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteRolID
    EvolinciteRol {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolincitePermissionsMutationVariables,
  APITypes.UpdateEvolincitePermissionsMutation
>;
export const deleteEvolincitePermissions = /* GraphQL */ `mutation DeleteEvolincitePermissions(
  $input: DeleteEvolincitePermissionsInput!
  $condition: ModelEvolincitePermissionsConditionInput
) {
  deleteEvolincitePermissions(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    evolinciteUserID
    evolinciteDepartmentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteRolID
    EvolinciteRol {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolincitePermissionsMutationVariables,
  APITypes.DeleteEvolincitePermissionsMutation
>;
export const createEvolinciteDepartment = /* GraphQL */ `mutation CreateEvolinciteDepartment(
  $input: CreateEvolinciteDepartmentInput!
  $condition: ModelEvolinciteDepartmentConditionInput
) {
  createEvolinciteDepartment(input: $input, condition: $condition) {
    id
    name
    parent
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteDepartmentMutationVariables,
  APITypes.CreateEvolinciteDepartmentMutation
>;
export const updateEvolinciteDepartment = /* GraphQL */ `mutation UpdateEvolinciteDepartment(
  $input: UpdateEvolinciteDepartmentInput!
  $condition: ModelEvolinciteDepartmentConditionInput
) {
  updateEvolinciteDepartment(input: $input, condition: $condition) {
    id
    name
    parent
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteDepartmentMutationVariables,
  APITypes.UpdateEvolinciteDepartmentMutation
>;
export const deleteEvolinciteDepartment = /* GraphQL */ `mutation DeleteEvolinciteDepartment(
  $input: DeleteEvolinciteDepartmentInput!
  $condition: ModelEvolinciteDepartmentConditionInput
) {
  deleteEvolinciteDepartment(input: $input, condition: $condition) {
    id
    name
    parent
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteDepartmentMutationVariables,
  APITypes.DeleteEvolinciteDepartmentMutation
>;
export const createEvolinciteSubscription = /* GraphQL */ `mutation CreateEvolinciteSubscription(
  $input: CreateEvolinciteSubscriptionInput!
  $condition: ModelEvolinciteSubscriptionConditionInput
) {
  createEvolinciteSubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    state
    EvolinciteCompanies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteSubscriptionMutationVariables,
  APITypes.CreateEvolinciteSubscriptionMutation
>;
export const updateEvolinciteSubscription = /* GraphQL */ `mutation UpdateEvolinciteSubscription(
  $input: UpdateEvolinciteSubscriptionInput!
  $condition: ModelEvolinciteSubscriptionConditionInput
) {
  updateEvolinciteSubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    state
    EvolinciteCompanies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteSubscriptionMutationVariables,
  APITypes.UpdateEvolinciteSubscriptionMutation
>;
export const deleteEvolinciteSubscription = /* GraphQL */ `mutation DeleteEvolinciteSubscription(
  $input: DeleteEvolinciteSubscriptionInput!
  $condition: ModelEvolinciteSubscriptionConditionInput
) {
  deleteEvolinciteSubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    state
    EvolinciteCompanies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteSubscriptionMutationVariables,
  APITypes.DeleteEvolinciteSubscriptionMutation
>;
export const createEvolinciteModule = /* GraphQL */ `mutation CreateEvolinciteModule(
  $input: CreateEvolinciteModuleInput!
  $condition: ModelEvolinciteModuleConditionInput
) {
  createEvolinciteModule(input: $input, condition: $condition) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteModuleMutationVariables,
  APITypes.CreateEvolinciteModuleMutation
>;
export const updateEvolinciteModule = /* GraphQL */ `mutation UpdateEvolinciteModule(
  $input: UpdateEvolinciteModuleInput!
  $condition: ModelEvolinciteModuleConditionInput
) {
  updateEvolinciteModule(input: $input, condition: $condition) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteModuleMutationVariables,
  APITypes.UpdateEvolinciteModuleMutation
>;
export const deleteEvolinciteModule = /* GraphQL */ `mutation DeleteEvolinciteModule(
  $input: DeleteEvolinciteModuleInput!
  $condition: ModelEvolinciteModuleConditionInput
) {
  deleteEvolinciteModule(input: $input, condition: $condition) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteModuleMutationVariables,
  APITypes.DeleteEvolinciteModuleMutation
>;
export const createEvolinciteFunctionality = /* GraphQL */ `mutation CreateEvolinciteFunctionality(
  $input: CreateEvolinciteFunctionalityInput!
  $condition: ModelEvolinciteFunctionalityConditionInput
) {
  createEvolinciteFunctionality(input: $input, condition: $condition) {
    id
    name
    functionalities
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteFunctionalityMutationVariables,
  APITypes.CreateEvolinciteFunctionalityMutation
>;
export const updateEvolinciteFunctionality = /* GraphQL */ `mutation UpdateEvolinciteFunctionality(
  $input: UpdateEvolinciteFunctionalityInput!
  $condition: ModelEvolinciteFunctionalityConditionInput
) {
  updateEvolinciteFunctionality(input: $input, condition: $condition) {
    id
    name
    functionalities
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteFunctionalityMutationVariables,
  APITypes.UpdateEvolinciteFunctionalityMutation
>;
export const deleteEvolinciteFunctionality = /* GraphQL */ `mutation DeleteEvolinciteFunctionality(
  $input: DeleteEvolinciteFunctionalityInput!
  $condition: ModelEvolinciteFunctionalityConditionInput
) {
  deleteEvolinciteFunctionality(input: $input, condition: $condition) {
    id
    name
    functionalities
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteFunctionalityMutationVariables,
  APITypes.DeleteEvolinciteFunctionalityMutation
>;
export const createEvolinciteRol = /* GraphQL */ `mutation CreateEvolinciteRol(
  $input: CreateEvolinciteRolInput!
  $condition: ModelEvolinciteRolConditionInput
) {
  createEvolinciteRol(input: $input, condition: $condition) {
    id
    name
    permissions
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteRolMutationVariables,
  APITypes.CreateEvolinciteRolMutation
>;
export const updateEvolinciteRol = /* GraphQL */ `mutation UpdateEvolinciteRol(
  $input: UpdateEvolinciteRolInput!
  $condition: ModelEvolinciteRolConditionInput
) {
  updateEvolinciteRol(input: $input, condition: $condition) {
    id
    name
    permissions
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteRolMutationVariables,
  APITypes.UpdateEvolinciteRolMutation
>;
export const deleteEvolinciteRol = /* GraphQL */ `mutation DeleteEvolinciteRol(
  $input: DeleteEvolinciteRolInput!
  $condition: ModelEvolinciteRolConditionInput
) {
  deleteEvolinciteRol(input: $input, condition: $condition) {
    id
    name
    permissions
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteRolMutationVariables,
  APITypes.DeleteEvolinciteRolMutation
>;
export const createEvolinciteCustomer = /* GraphQL */ `mutation CreateEvolinciteCustomer(
  $input: CreateEvolinciteCustomerInput!
  $condition: ModelEvolinciteCustomerConditionInput
) {
  createEvolinciteCustomer(input: $input, condition: $condition) {
    id
    name
    lastName
    documentType
    documentNumber
    phone
    optionalPhone
    email
    picture
    birthDate
    municipality
    documents
    address
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCustomerMutationVariables,
  APITypes.CreateEvolinciteCustomerMutation
>;
export const updateEvolinciteCustomer = /* GraphQL */ `mutation UpdateEvolinciteCustomer(
  $input: UpdateEvolinciteCustomerInput!
  $condition: ModelEvolinciteCustomerConditionInput
) {
  updateEvolinciteCustomer(input: $input, condition: $condition) {
    id
    name
    lastName
    documentType
    documentNumber
    phone
    optionalPhone
    email
    picture
    birthDate
    municipality
    documents
    address
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCustomerMutationVariables,
  APITypes.UpdateEvolinciteCustomerMutation
>;
export const deleteEvolinciteCustomer = /* GraphQL */ `mutation DeleteEvolinciteCustomer(
  $input: DeleteEvolinciteCustomerInput!
  $condition: ModelEvolinciteCustomerConditionInput
) {
  deleteEvolinciteCustomer(input: $input, condition: $condition) {
    id
    name
    lastName
    documentType
    documentNumber
    phone
    optionalPhone
    email
    picture
    birthDate
    municipality
    documents
    address
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCustomerMutationVariables,
  APITypes.DeleteEvolinciteCustomerMutation
>;
export const createEvolinciteUserSettings = /* GraphQL */ `mutation CreateEvolinciteUserSettings(
  $input: CreateEvolinciteUserSettingsInput!
  $condition: ModelEvolinciteUserSettingsConditionInput
) {
  createEvolinciteUserSettings(input: $input, condition: $condition) {
    id
    settings
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserSettingsMutationVariables,
  APITypes.CreateEvolinciteUserSettingsMutation
>;
export const updateEvolinciteUserSettings = /* GraphQL */ `mutation UpdateEvolinciteUserSettings(
  $input: UpdateEvolinciteUserSettingsInput!
  $condition: ModelEvolinciteUserSettingsConditionInput
) {
  updateEvolinciteUserSettings(input: $input, condition: $condition) {
    id
    settings
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserSettingsMutationVariables,
  APITypes.UpdateEvolinciteUserSettingsMutation
>;
export const deleteEvolinciteUserSettings = /* GraphQL */ `mutation DeleteEvolinciteUserSettings(
  $input: DeleteEvolinciteUserSettingsInput!
  $condition: ModelEvolinciteUserSettingsConditionInput
) {
  deleteEvolinciteUserSettings(input: $input, condition: $condition) {
    id
    settings
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserSettingsMutationVariables,
  APITypes.DeleteEvolinciteUserSettingsMutation
>;
export const createEvolinciteCrmPipeline = /* GraphQL */ `mutation CreateEvolinciteCrmPipeline(
  $input: CreateEvolinciteCrmPipelineInput!
  $condition: ModelEvolinciteCrmPipelineConditionInput
) {
  createEvolinciteCrmPipeline(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmPipelineMutationVariables,
  APITypes.CreateEvolinciteCrmPipelineMutation
>;
export const updateEvolinciteCrmPipeline = /* GraphQL */ `mutation UpdateEvolinciteCrmPipeline(
  $input: UpdateEvolinciteCrmPipelineInput!
  $condition: ModelEvolinciteCrmPipelineConditionInput
) {
  updateEvolinciteCrmPipeline(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmPipelineMutationVariables,
  APITypes.UpdateEvolinciteCrmPipelineMutation
>;
export const deleteEvolinciteCrmPipeline = /* GraphQL */ `mutation DeleteEvolinciteCrmPipeline(
  $input: DeleteEvolinciteCrmPipelineInput!
  $condition: ModelEvolinciteCrmPipelineConditionInput
) {
  deleteEvolinciteCrmPipeline(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmPipelineMutationVariables,
  APITypes.DeleteEvolinciteCrmPipelineMutation
>;
export const createEvolinciteCrmState = /* GraphQL */ `mutation CreateEvolinciteCrmState(
  $input: CreateEvolinciteCrmStateInput!
  $condition: ModelEvolinciteCrmStateConditionInput
) {
  createEvolinciteCrmState(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    color
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    evolinciteCrmPipelineID
    EvolinciteCrmPipeline {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmStateMutationVariables,
  APITypes.CreateEvolinciteCrmStateMutation
>;
export const updateEvolinciteCrmState = /* GraphQL */ `mutation UpdateEvolinciteCrmState(
  $input: UpdateEvolinciteCrmStateInput!
  $condition: ModelEvolinciteCrmStateConditionInput
) {
  updateEvolinciteCrmState(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    color
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    evolinciteCrmPipelineID
    EvolinciteCrmPipeline {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmStateMutationVariables,
  APITypes.UpdateEvolinciteCrmStateMutation
>;
export const deleteEvolinciteCrmState = /* GraphQL */ `mutation DeleteEvolinciteCrmState(
  $input: DeleteEvolinciteCrmStateInput!
  $condition: ModelEvolinciteCrmStateConditionInput
) {
  deleteEvolinciteCrmState(input: $input, condition: $condition) {
    id
    name
    description
    publicDescription
    color
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    evolinciteCrmPipelineID
    EvolinciteCrmPipeline {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmStateMutationVariables,
  APITypes.DeleteEvolinciteCrmStateMutation
>;
export const createEvolinciteCrmNegotiationLog = /* GraphQL */ `mutation CreateEvolinciteCrmNegotiationLog(
  $input: CreateEvolinciteCrmNegotiationLogInput!
  $condition: ModelEvolinciteCrmNegotiationLogConditionInput
) {
  createEvolinciteCrmNegotiationLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmNegotiationLogMutationVariables,
  APITypes.CreateEvolinciteCrmNegotiationLogMutation
>;
export const updateEvolinciteCrmNegotiationLog = /* GraphQL */ `mutation UpdateEvolinciteCrmNegotiationLog(
  $input: UpdateEvolinciteCrmNegotiationLogInput!
  $condition: ModelEvolinciteCrmNegotiationLogConditionInput
) {
  updateEvolinciteCrmNegotiationLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmNegotiationLogMutationVariables,
  APITypes.UpdateEvolinciteCrmNegotiationLogMutation
>;
export const deleteEvolinciteCrmNegotiationLog = /* GraphQL */ `mutation DeleteEvolinciteCrmNegotiationLog(
  $input: DeleteEvolinciteCrmNegotiationLogInput!
  $condition: ModelEvolinciteCrmNegotiationLogConditionInput
) {
  deleteEvolinciteCrmNegotiationLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmNegotiationLogMutationVariables,
  APITypes.DeleteEvolinciteCrmNegotiationLogMutation
>;
export const createEvolinciteCrmNegotiation = /* GraphQL */ `mutation CreateEvolinciteCrmNegotiation(
  $input: CreateEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteCrmNegotiationConditionInput
) {
  createEvolinciteCrmNegotiation(input: $input, condition: $condition) {
    id
    name
    value
    due
    parent
    date
    documents
    meta
    frozen
    valueInterest
    valueCollection
    observers
    exitDate
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserOwnerID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolinciteUsersObserver {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteProcessTypeID
    EvolinciteProcessType {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    initialGoalID
    InitialGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    finalGoalID
    FinalGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmNegotiationMutationVariables,
  APITypes.CreateEvolinciteCrmNegotiationMutation
>;
export const updateEvolinciteCrmNegotiation = /* GraphQL */ `mutation UpdateEvolinciteCrmNegotiation(
  $input: UpdateEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteCrmNegotiationConditionInput
) {
  updateEvolinciteCrmNegotiation(input: $input, condition: $condition) {
    id
    name
    value
    due
    parent
    date
    documents
    meta
    frozen
    valueInterest
    valueCollection
    observers
    exitDate
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserOwnerID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolinciteUsersObserver {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteProcessTypeID
    EvolinciteProcessType {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    initialGoalID
    InitialGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    finalGoalID
    FinalGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmNegotiationMutationVariables,
  APITypes.UpdateEvolinciteCrmNegotiationMutation
>;
export const deleteEvolinciteCrmNegotiation = /* GraphQL */ `mutation DeleteEvolinciteCrmNegotiation(
  $input: DeleteEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteCrmNegotiationConditionInput
) {
  deleteEvolinciteCrmNegotiation(input: $input, condition: $condition) {
    id
    name
    value
    due
    parent
    date
    documents
    meta
    frozen
    valueInterest
    valueCollection
    observers
    exitDate
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserOwnerID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolinciteUsersObserver {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteProcessTypeID
    EvolinciteProcessType {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    initialGoalID
    InitialGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    finalGoalID
    FinalGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmNegotiationMutationVariables,
  APITypes.DeleteEvolinciteCrmNegotiationMutation
>;
export const createEvolinciteRoom = /* GraphQL */ `mutation CreateEvolinciteRoom(
  $input: CreateEvolinciteRoomInput!
  $condition: ModelEvolinciteRoomConditionInput
) {
  createEvolinciteRoom(input: $input, condition: $condition) {
    id
    Key
    name
    state
    meta
    EvolinciteUsers {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteRoomMutationVariables,
  APITypes.CreateEvolinciteRoomMutation
>;
export const updateEvolinciteRoom = /* GraphQL */ `mutation UpdateEvolinciteRoom(
  $input: UpdateEvolinciteRoomInput!
  $condition: ModelEvolinciteRoomConditionInput
) {
  updateEvolinciteRoom(input: $input, condition: $condition) {
    id
    Key
    name
    state
    meta
    EvolinciteUsers {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteRoomMutationVariables,
  APITypes.UpdateEvolinciteRoomMutation
>;
export const deleteEvolinciteRoom = /* GraphQL */ `mutation DeleteEvolinciteRoom(
  $input: DeleteEvolinciteRoomInput!
  $condition: ModelEvolinciteRoomConditionInput
) {
  deleteEvolinciteRoom(input: $input, condition: $condition) {
    id
    Key
    name
    state
    meta
    EvolinciteUsers {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteRoomMutationVariables,
  APITypes.DeleteEvolinciteRoomMutation
>;
export const createEvolinciteMessage = /* GraphQL */ `mutation CreateEvolinciteMessage(
  $input: CreateEvolinciteMessageInput!
  $condition: ModelEvolinciteMessageConditionInput
) {
  createEvolinciteMessage(input: $input, condition: $condition) {
    id
    content
    type
    state
    createdAt
    updatedAt
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteRoomID
    EvolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMessageMutationVariables,
  APITypes.CreateEvolinciteMessageMutation
>;
export const updateEvolinciteMessage = /* GraphQL */ `mutation UpdateEvolinciteMessage(
  $input: UpdateEvolinciteMessageInput!
  $condition: ModelEvolinciteMessageConditionInput
) {
  updateEvolinciteMessage(input: $input, condition: $condition) {
    id
    content
    type
    state
    createdAt
    updatedAt
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteRoomID
    EvolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMessageMutationVariables,
  APITypes.UpdateEvolinciteMessageMutation
>;
export const deleteEvolinciteMessage = /* GraphQL */ `mutation DeleteEvolinciteMessage(
  $input: DeleteEvolinciteMessageInput!
  $condition: ModelEvolinciteMessageConditionInput
) {
  deleteEvolinciteMessage(input: $input, condition: $condition) {
    id
    content
    type
    state
    createdAt
    updatedAt
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteRoomID
    EvolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMessageMutationVariables,
  APITypes.DeleteEvolinciteMessageMutation
>;
export const createEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `mutation CreateEvolinciteCrmNegotiationFieldValue(
  $input: CreateEvolinciteCrmNegotiationFieldValueInput!
  $condition: ModelEvolinciteCrmNegotiationFieldValueConditionInput
) {
  createEvolinciteCrmNegotiationFieldValue(
    input: $input
    condition: $condition
  ) {
    id
    value
    state
    evolinciteCrmNegotiationFieldID
    EvolinciteCrmNegotiationField {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCrmNegotiationFieldValueMutationVariables,
  APITypes.CreateEvolinciteCrmNegotiationFieldValueMutation
>;
export const updateEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `mutation UpdateEvolinciteCrmNegotiationFieldValue(
  $input: UpdateEvolinciteCrmNegotiationFieldValueInput!
  $condition: ModelEvolinciteCrmNegotiationFieldValueConditionInput
) {
  updateEvolinciteCrmNegotiationFieldValue(
    input: $input
    condition: $condition
  ) {
    id
    value
    state
    evolinciteCrmNegotiationFieldID
    EvolinciteCrmNegotiationField {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCrmNegotiationFieldValueMutationVariables,
  APITypes.UpdateEvolinciteCrmNegotiationFieldValueMutation
>;
export const deleteEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `mutation DeleteEvolinciteCrmNegotiationFieldValue(
  $input: DeleteEvolinciteCrmNegotiationFieldValueInput!
  $condition: ModelEvolinciteCrmNegotiationFieldValueConditionInput
) {
  deleteEvolinciteCrmNegotiationFieldValue(
    input: $input
    condition: $condition
  ) {
    id
    value
    state
    evolinciteCrmNegotiationFieldID
    EvolinciteCrmNegotiationField {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCrmNegotiationFieldValueMutationVariables,
  APITypes.DeleteEvolinciteCrmNegotiationFieldValueMutation
>;
export const createEvolinciteEmail = /* GraphQL */ `mutation CreateEvolinciteEmail(
  $input: CreateEvolinciteEmailInput!
  $condition: ModelEvolinciteEmailConditionInput
) {
  createEvolinciteEmail(input: $input, condition: $condition) {
    id
    from
    to
    content
    subject
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteEmailMutationVariables,
  APITypes.CreateEvolinciteEmailMutation
>;
export const updateEvolinciteEmail = /* GraphQL */ `mutation UpdateEvolinciteEmail(
  $input: UpdateEvolinciteEmailInput!
  $condition: ModelEvolinciteEmailConditionInput
) {
  updateEvolinciteEmail(input: $input, condition: $condition) {
    id
    from
    to
    content
    subject
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteEmailMutationVariables,
  APITypes.UpdateEvolinciteEmailMutation
>;
export const deleteEvolinciteEmail = /* GraphQL */ `mutation DeleteEvolinciteEmail(
  $input: DeleteEvolinciteEmailInput!
  $condition: ModelEvolinciteEmailConditionInput
) {
  deleteEvolinciteEmail(input: $input, condition: $condition) {
    id
    from
    to
    content
    subject
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteEmailMutationVariables,
  APITypes.DeleteEvolinciteEmailMutation
>;
export const createEvolinciteEmailTemplate = /* GraphQL */ `mutation CreateEvolinciteEmailTemplate(
  $input: CreateEvolinciteEmailTemplateInput!
  $condition: ModelEvolinciteEmailTemplateConditionInput
) {
  createEvolinciteEmailTemplate(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteEmailTemplateMutationVariables,
  APITypes.CreateEvolinciteEmailTemplateMutation
>;
export const updateEvolinciteEmailTemplate = /* GraphQL */ `mutation UpdateEvolinciteEmailTemplate(
  $input: UpdateEvolinciteEmailTemplateInput!
  $condition: ModelEvolinciteEmailTemplateConditionInput
) {
  updateEvolinciteEmailTemplate(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteEmailTemplateMutationVariables,
  APITypes.UpdateEvolinciteEmailTemplateMutation
>;
export const deleteEvolinciteEmailTemplate = /* GraphQL */ `mutation DeleteEvolinciteEmailTemplate(
  $input: DeleteEvolinciteEmailTemplateInput!
  $condition: ModelEvolinciteEmailTemplateConditionInput
) {
  deleteEvolinciteEmailTemplate(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteEmailTemplateMutationVariables,
  APITypes.DeleteEvolinciteEmailTemplateMutation
>;
export const createEvolinciteNotification = /* GraphQL */ `mutation CreateEvolinciteNotification(
  $input: CreateEvolinciteNotificationInput!
  $condition: ModelEvolinciteNotificationConditionInput
) {
  createEvolinciteNotification(input: $input, condition: $condition) {
    id
    content
    title
    priority
    type
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteNotificationMutationVariables,
  APITypes.CreateEvolinciteNotificationMutation
>;
export const updateEvolinciteNotification = /* GraphQL */ `mutation UpdateEvolinciteNotification(
  $input: UpdateEvolinciteNotificationInput!
  $condition: ModelEvolinciteNotificationConditionInput
) {
  updateEvolinciteNotification(input: $input, condition: $condition) {
    id
    content
    title
    priority
    type
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteNotificationMutationVariables,
  APITypes.UpdateEvolinciteNotificationMutation
>;
export const deleteEvolinciteNotification = /* GraphQL */ `mutation DeleteEvolinciteNotification(
  $input: DeleteEvolinciteNotificationInput!
  $condition: ModelEvolinciteNotificationConditionInput
) {
  deleteEvolinciteNotification(input: $input, condition: $condition) {
    id
    content
    title
    priority
    type
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteNotificationMutationVariables,
  APITypes.DeleteEvolinciteNotificationMutation
>;
export const createEvolinciteUserDepartment = /* GraphQL */ `mutation CreateEvolinciteUserDepartment(
  $input: CreateEvolinciteUserDepartmentInput!
  $condition: ModelEvolinciteUserDepartmentConditionInput
) {
  createEvolinciteUserDepartment(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteDepartmentID
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserDepartmentMutationVariables,
  APITypes.CreateEvolinciteUserDepartmentMutation
>;
export const updateEvolinciteUserDepartment = /* GraphQL */ `mutation UpdateEvolinciteUserDepartment(
  $input: UpdateEvolinciteUserDepartmentInput!
  $condition: ModelEvolinciteUserDepartmentConditionInput
) {
  updateEvolinciteUserDepartment(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteDepartmentID
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserDepartmentMutationVariables,
  APITypes.UpdateEvolinciteUserDepartmentMutation
>;
export const deleteEvolinciteUserDepartment = /* GraphQL */ `mutation DeleteEvolinciteUserDepartment(
  $input: DeleteEvolinciteUserDepartmentInput!
  $condition: ModelEvolinciteUserDepartmentConditionInput
) {
  deleteEvolinciteUserDepartment(input: $input, condition: $condition) {
    id
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteDepartmentID
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserDepartmentMutationVariables,
  APITypes.DeleteEvolinciteUserDepartmentMutation
>;
export const createEvolinciteUserEvolinciteCompany = /* GraphQL */ `mutation CreateEvolinciteUserEvolinciteCompany(
  $input: CreateEvolinciteUserEvolinciteCompanyInput!
  $condition: ModelEvolinciteUserEvolinciteCompanyConditionInput
) {
  createEvolinciteUserEvolinciteCompany(input: $input, condition: $condition) {
    id
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserEvolinciteCompanyMutationVariables,
  APITypes.CreateEvolinciteUserEvolinciteCompanyMutation
>;
export const updateEvolinciteUserEvolinciteCompany = /* GraphQL */ `mutation UpdateEvolinciteUserEvolinciteCompany(
  $input: UpdateEvolinciteUserEvolinciteCompanyInput!
  $condition: ModelEvolinciteUserEvolinciteCompanyConditionInput
) {
  updateEvolinciteUserEvolinciteCompany(input: $input, condition: $condition) {
    id
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserEvolinciteCompanyMutationVariables,
  APITypes.UpdateEvolinciteUserEvolinciteCompanyMutation
>;
export const deleteEvolinciteUserEvolinciteCompany = /* GraphQL */ `mutation DeleteEvolinciteUserEvolinciteCompany(
  $input: DeleteEvolinciteUserEvolinciteCompanyInput!
  $condition: ModelEvolinciteUserEvolinciteCompanyConditionInput
) {
  deleteEvolinciteUserEvolinciteCompany(input: $input, condition: $condition) {
    id
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserEvolinciteCompanyMutationVariables,
  APITypes.DeleteEvolinciteUserEvolinciteCompanyMutation
>;
export const createEvolinciteUser = /* GraphQL */ `mutation CreateEvolinciteUser(
  $input: CreateEvolinciteUserInput!
  $condition: ModelEvolinciteUserConditionInput
) {
  createEvolinciteUser(input: $input, condition: $condition) {
    id
    name
    nit
    phone
    picture
    email
    sub
    meta
    cv
    contract
    memos
    personalMail
    personalPhone
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    EvolinciteActivitiesOwner {
      nextToken
      __typename
    }
    EvolinciteActivitiesParticipants {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsOwner {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsReferrer {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserReferrer {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsObserver {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteTicket {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    EvolinciteFoldersOwner {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserMutationVariables,
  APITypes.CreateEvolinciteUserMutation
>;
export const updateEvolinciteUser = /* GraphQL */ `mutation UpdateEvolinciteUser(
  $input: UpdateEvolinciteUserInput!
  $condition: ModelEvolinciteUserConditionInput
) {
  updateEvolinciteUser(input: $input, condition: $condition) {
    id
    name
    nit
    phone
    picture
    email
    sub
    meta
    cv
    contract
    memos
    personalMail
    personalPhone
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    EvolinciteActivitiesOwner {
      nextToken
      __typename
    }
    EvolinciteActivitiesParticipants {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsOwner {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsReferrer {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserReferrer {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsObserver {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteTicket {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    EvolinciteFoldersOwner {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserMutationVariables,
  APITypes.UpdateEvolinciteUserMutation
>;
export const deleteEvolinciteUser = /* GraphQL */ `mutation DeleteEvolinciteUser(
  $input: DeleteEvolinciteUserInput!
  $condition: ModelEvolinciteUserConditionInput
) {
  deleteEvolinciteUser(input: $input, condition: $condition) {
    id
    name
    nit
    phone
    picture
    email
    sub
    meta
    cv
    contract
    memos
    personalMail
    personalPhone
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    EvolinciteActivitiesOwner {
      nextToken
      __typename
    }
    EvolinciteActivitiesParticipants {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsOwner {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsReferrer {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserReferrer {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsObserver {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteTicket {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    EvolinciteFoldersOwner {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserMutationVariables,
  APITypes.DeleteEvolinciteUserMutation
>;
export const createEvolinciteCompany = /* GraphQL */ `mutation CreateEvolinciteCompany(
  $input: CreateEvolinciteCompanyInput!
  $condition: ModelEvolinciteCompanyConditionInput
) {
  createEvolinciteCompany(input: $input, condition: $condition) {
    id
    name
    nit
    picture
    meta
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    evolinciteSubscriptionID
    EvolinciteSubscription {
      id
      name
      price
      dateInitial
      dateFinal
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationSections {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteDepartments {
      nextToken
      __typename
    }
    EvolinciteCustomers {
      nextToken
      __typename
    }
    EvolinciteCrmPipelines {
      nextToken
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteJobTitles {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteEmailTemplates {
      nextToken
      __typename
    }
    EvolinciteEmails {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteRoles {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteExpenseTypes {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteProcessTypes {
      nextToken
      __typename
    }
    EvolinciteGoal {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteTicketOwner {
      nextToken
      __typename
    }
    EvolinciteTicketOrigin {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolincitePaymentAutomations {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteMailTemplates {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCompanyMutationVariables,
  APITypes.CreateEvolinciteCompanyMutation
>;
export const updateEvolinciteCompany = /* GraphQL */ `mutation UpdateEvolinciteCompany(
  $input: UpdateEvolinciteCompanyInput!
  $condition: ModelEvolinciteCompanyConditionInput
) {
  updateEvolinciteCompany(input: $input, condition: $condition) {
    id
    name
    nit
    picture
    meta
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    evolinciteSubscriptionID
    EvolinciteSubscription {
      id
      name
      price
      dateInitial
      dateFinal
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationSections {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteDepartments {
      nextToken
      __typename
    }
    EvolinciteCustomers {
      nextToken
      __typename
    }
    EvolinciteCrmPipelines {
      nextToken
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteJobTitles {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteEmailTemplates {
      nextToken
      __typename
    }
    EvolinciteEmails {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteRoles {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteExpenseTypes {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteProcessTypes {
      nextToken
      __typename
    }
    EvolinciteGoal {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteTicketOwner {
      nextToken
      __typename
    }
    EvolinciteTicketOrigin {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolincitePaymentAutomations {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteMailTemplates {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCompanyMutationVariables,
  APITypes.UpdateEvolinciteCompanyMutation
>;
export const deleteEvolinciteCompany = /* GraphQL */ `mutation DeleteEvolinciteCompany(
  $input: DeleteEvolinciteCompanyInput!
  $condition: ModelEvolinciteCompanyConditionInput
) {
  deleteEvolinciteCompany(input: $input, condition: $condition) {
    id
    name
    nit
    picture
    meta
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    evolinciteSubscriptionID
    EvolinciteSubscription {
      id
      name
      price
      dateInitial
      dateFinal
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationSections {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteDepartments {
      nextToken
      __typename
    }
    EvolinciteCustomers {
      nextToken
      __typename
    }
    EvolinciteCrmPipelines {
      nextToken
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteJobTitles {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteEmailTemplates {
      nextToken
      __typename
    }
    EvolinciteEmails {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteRoles {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteExpenseTypes {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteProcessTypes {
      nextToken
      __typename
    }
    EvolinciteGoal {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteTicketOwner {
      nextToken
      __typename
    }
    EvolinciteTicketOrigin {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolincitePaymentAutomations {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteMailTemplates {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCompanyMutationVariables,
  APITypes.DeleteEvolinciteCompanyMutation
>;
export const createEvolinciteGoal = /* GraphQL */ `mutation CreateEvolinciteGoal(
  $input: CreateEvolinciteGoalInput!
  $condition: ModelEvolinciteGoalConditionInput
) {
  createEvolinciteGoal(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationsInitial {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsFinal {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteGoalMutationVariables,
  APITypes.CreateEvolinciteGoalMutation
>;
export const updateEvolinciteGoal = /* GraphQL */ `mutation UpdateEvolinciteGoal(
  $input: UpdateEvolinciteGoalInput!
  $condition: ModelEvolinciteGoalConditionInput
) {
  updateEvolinciteGoal(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationsInitial {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsFinal {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteGoalMutationVariables,
  APITypes.UpdateEvolinciteGoalMutation
>;
export const deleteEvolinciteGoal = /* GraphQL */ `mutation DeleteEvolinciteGoal(
  $input: DeleteEvolinciteGoalInput!
  $condition: ModelEvolinciteGoalConditionInput
) {
  deleteEvolinciteGoal(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationsInitial {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsFinal {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteGoalMutationVariables,
  APITypes.DeleteEvolinciteGoalMutation
>;
export const createEvolinciteWalletPaymentLog = /* GraphQL */ `mutation CreateEvolinciteWalletPaymentLog(
  $input: CreateEvolinciteWalletPaymentLogInput!
  $condition: ModelEvolinciteWalletPaymentLogConditionInput
) {
  createEvolinciteWalletPaymentLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteWalletPaymentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayment {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteWalletPaymentLogMutationVariables,
  APITypes.CreateEvolinciteWalletPaymentLogMutation
>;
export const updateEvolinciteWalletPaymentLog = /* GraphQL */ `mutation UpdateEvolinciteWalletPaymentLog(
  $input: UpdateEvolinciteWalletPaymentLogInput!
  $condition: ModelEvolinciteWalletPaymentLogConditionInput
) {
  updateEvolinciteWalletPaymentLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteWalletPaymentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayment {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteWalletPaymentLogMutationVariables,
  APITypes.UpdateEvolinciteWalletPaymentLogMutation
>;
export const deleteEvolinciteWalletPaymentLog = /* GraphQL */ `mutation DeleteEvolinciteWalletPaymentLog(
  $input: DeleteEvolinciteWalletPaymentLogInput!
  $condition: ModelEvolinciteWalletPaymentLogConditionInput
) {
  deleteEvolinciteWalletPaymentLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteWalletPaymentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayment {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteWalletPaymentLogMutationVariables,
  APITypes.DeleteEvolinciteWalletPaymentLogMutation
>;
export const createEvolinciteExpenseLog = /* GraphQL */ `mutation CreateEvolinciteExpenseLog(
  $input: CreateEvolinciteExpenseLogInput!
  $condition: ModelEvolinciteExpenseLogConditionInput
) {
  createEvolinciteExpenseLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteExpenseID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteExpense {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteExpenseLogMutationVariables,
  APITypes.CreateEvolinciteExpenseLogMutation
>;
export const updateEvolinciteExpenseLog = /* GraphQL */ `mutation UpdateEvolinciteExpenseLog(
  $input: UpdateEvolinciteExpenseLogInput!
  $condition: ModelEvolinciteExpenseLogConditionInput
) {
  updateEvolinciteExpenseLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteExpenseID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteExpense {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteExpenseLogMutationVariables,
  APITypes.UpdateEvolinciteExpenseLogMutation
>;
export const deleteEvolinciteExpenseLog = /* GraphQL */ `mutation DeleteEvolinciteExpenseLog(
  $input: DeleteEvolinciteExpenseLogInput!
  $condition: ModelEvolinciteExpenseLogConditionInput
) {
  deleteEvolinciteExpenseLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteExpenseID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteExpense {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteExpenseLogMutationVariables,
  APITypes.DeleteEvolinciteExpenseLogMutation
>;
export const createEvolinciteTicket = /* GraphQL */ `mutation CreateEvolinciteTicket(
  $input: CreateEvolinciteTicketInput!
  $condition: ModelEvolinciteTicketConditionInput
) {
  createEvolinciteTicket(input: $input, condition: $condition) {
    id
    name
    description
    documents
    meta
    ticketState
    state
    evolinciteUserID
    evolinciteCompanyOwnerID
    evolinciteCompanyOriginID
    EvolinciteCompanyOwner {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompanyOrigin {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteTicketMutationVariables,
  APITypes.CreateEvolinciteTicketMutation
>;
export const updateEvolinciteTicket = /* GraphQL */ `mutation UpdateEvolinciteTicket(
  $input: UpdateEvolinciteTicketInput!
  $condition: ModelEvolinciteTicketConditionInput
) {
  updateEvolinciteTicket(input: $input, condition: $condition) {
    id
    name
    description
    documents
    meta
    ticketState
    state
    evolinciteUserID
    evolinciteCompanyOwnerID
    evolinciteCompanyOriginID
    EvolinciteCompanyOwner {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompanyOrigin {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteTicketMutationVariables,
  APITypes.UpdateEvolinciteTicketMutation
>;
export const deleteEvolinciteTicket = /* GraphQL */ `mutation DeleteEvolinciteTicket(
  $input: DeleteEvolinciteTicketInput!
  $condition: ModelEvolinciteTicketConditionInput
) {
  deleteEvolinciteTicket(input: $input, condition: $condition) {
    id
    name
    description
    documents
    meta
    ticketState
    state
    evolinciteUserID
    evolinciteCompanyOwnerID
    evolinciteCompanyOriginID
    EvolinciteCompanyOwner {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompanyOrigin {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteTicketMutationVariables,
  APITypes.DeleteEvolinciteTicketMutation
>;
export const createEvolinciteTicketLog = /* GraphQL */ `mutation CreateEvolinciteTicketLog(
  $input: CreateEvolinciteTicketLogInput!
  $condition: ModelEvolinciteTicketLogConditionInput
) {
  createEvolinciteTicketLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteTicketID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicket {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteTicketLogMutationVariables,
  APITypes.CreateEvolinciteTicketLogMutation
>;
export const updateEvolinciteTicketLog = /* GraphQL */ `mutation UpdateEvolinciteTicketLog(
  $input: UpdateEvolinciteTicketLogInput!
  $condition: ModelEvolinciteTicketLogConditionInput
) {
  updateEvolinciteTicketLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteTicketID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicket {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteTicketLogMutationVariables,
  APITypes.UpdateEvolinciteTicketLogMutation
>;
export const deleteEvolinciteTicketLog = /* GraphQL */ `mutation DeleteEvolinciteTicketLog(
  $input: DeleteEvolinciteTicketLogInput!
  $condition: ModelEvolinciteTicketLogConditionInput
) {
  deleteEvolinciteTicketLog(input: $input, condition: $condition) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteTicketID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicket {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteTicketLogMutationVariables,
  APITypes.DeleteEvolinciteTicketLogMutation
>;
export const createEvolinciteFile = /* GraphQL */ `mutation CreateEvolinciteFile(
  $input: CreateEvolinciteFileInput!
  $condition: ModelEvolinciteFileConditionInput
) {
  createEvolinciteFile(input: $input, condition: $condition) {
    id
    name
    size
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteFolderID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFolder {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteFileMutationVariables,
  APITypes.CreateEvolinciteFileMutation
>;
export const updateEvolinciteFile = /* GraphQL */ `mutation UpdateEvolinciteFile(
  $input: UpdateEvolinciteFileInput!
  $condition: ModelEvolinciteFileConditionInput
) {
  updateEvolinciteFile(input: $input, condition: $condition) {
    id
    name
    size
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteFolderID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFolder {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteFileMutationVariables,
  APITypes.UpdateEvolinciteFileMutation
>;
export const deleteEvolinciteFile = /* GraphQL */ `mutation DeleteEvolinciteFile(
  $input: DeleteEvolinciteFileInput!
  $condition: ModelEvolinciteFileConditionInput
) {
  deleteEvolinciteFile(input: $input, condition: $condition) {
    id
    name
    size
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteFolderID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFolder {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteFileMutationVariables,
  APITypes.DeleteEvolinciteFileMutation
>;
export const createEvolinciteFolder = /* GraphQL */ `mutation CreateEvolinciteFolder(
  $input: CreateEvolinciteFolderInput!
  $condition: ModelEvolinciteFolderConditionInput
) {
  createEvolinciteFolder(input: $input, condition: $condition) {
    id
    parent
    name
    meta
    state
    evolinciteUserID
    evolinciteUserOwnerID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteFolderMutationVariables,
  APITypes.CreateEvolinciteFolderMutation
>;
export const updateEvolinciteFolder = /* GraphQL */ `mutation UpdateEvolinciteFolder(
  $input: UpdateEvolinciteFolderInput!
  $condition: ModelEvolinciteFolderConditionInput
) {
  updateEvolinciteFolder(input: $input, condition: $condition) {
    id
    parent
    name
    meta
    state
    evolinciteUserID
    evolinciteUserOwnerID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteFolderMutationVariables,
  APITypes.UpdateEvolinciteFolderMutation
>;
export const deleteEvolinciteFolder = /* GraphQL */ `mutation DeleteEvolinciteFolder(
  $input: DeleteEvolinciteFolderInput!
  $condition: ModelEvolinciteFolderConditionInput
) {
  deleteEvolinciteFolder(input: $input, condition: $condition) {
    id
    parent
    name
    meta
    state
    evolinciteUserID
    evolinciteUserOwnerID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteFolderMutationVariables,
  APITypes.DeleteEvolinciteFolderMutation
>;
export const createEvolinciteArticle = /* GraphQL */ `mutation CreateEvolinciteArticle(
  $input: CreateEvolinciteArticleInput!
  $condition: ModelEvolinciteArticleConditionInput
) {
  createEvolinciteArticle(input: $input, condition: $condition) {
    id
    front
    cover
    title
    content
    articleState
    visibility
    publicationDate
    meta
    files
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteArticleMutationVariables,
  APITypes.CreateEvolinciteArticleMutation
>;
export const updateEvolinciteArticle = /* GraphQL */ `mutation UpdateEvolinciteArticle(
  $input: UpdateEvolinciteArticleInput!
  $condition: ModelEvolinciteArticleConditionInput
) {
  updateEvolinciteArticle(input: $input, condition: $condition) {
    id
    front
    cover
    title
    content
    articleState
    visibility
    publicationDate
    meta
    files
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteArticleMutationVariables,
  APITypes.UpdateEvolinciteArticleMutation
>;
export const deleteEvolinciteArticle = /* GraphQL */ `mutation DeleteEvolinciteArticle(
  $input: DeleteEvolinciteArticleInput!
  $condition: ModelEvolinciteArticleConditionInput
) {
  deleteEvolinciteArticle(input: $input, condition: $condition) {
    id
    front
    cover
    title
    content
    articleState
    visibility
    publicationDate
    meta
    files
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteArticleMutationVariables,
  APITypes.DeleteEvolinciteArticleMutation
>;
export const createEvolinciteArticleComment = /* GraphQL */ `mutation CreateEvolinciteArticleComment(
  $input: CreateEvolinciteArticleCommentInput!
  $condition: ModelEvolinciteArticleCommentConditionInput
) {
  createEvolinciteArticleComment(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteArticleID
    EvolinciteArticle {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteArticleCommentMutationVariables,
  APITypes.CreateEvolinciteArticleCommentMutation
>;
export const updateEvolinciteArticleComment = /* GraphQL */ `mutation UpdateEvolinciteArticleComment(
  $input: UpdateEvolinciteArticleCommentInput!
  $condition: ModelEvolinciteArticleCommentConditionInput
) {
  updateEvolinciteArticleComment(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteArticleID
    EvolinciteArticle {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteArticleCommentMutationVariables,
  APITypes.UpdateEvolinciteArticleCommentMutation
>;
export const deleteEvolinciteArticleComment = /* GraphQL */ `mutation DeleteEvolinciteArticleComment(
  $input: DeleteEvolinciteArticleCommentInput!
  $condition: ModelEvolinciteArticleCommentConditionInput
) {
  deleteEvolinciteArticleComment(input: $input, condition: $condition) {
    id
    content
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteArticleID
    EvolinciteArticle {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteArticleCommentMutationVariables,
  APITypes.DeleteEvolinciteArticleCommentMutation
>;
export const createEvolinciteFormConfiguration = /* GraphQL */ `mutation CreateEvolinciteFormConfiguration(
  $input: CreateEvolinciteFormConfigurationInput!
  $condition: ModelEvolinciteFormConfigurationConditionInput
) {
  createEvolinciteFormConfiguration(input: $input, condition: $condition) {
    id
    key
    name
    config
    meta
    title
    description
    observations
    front
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteFormConfigurationMutationVariables,
  APITypes.CreateEvolinciteFormConfigurationMutation
>;
export const updateEvolinciteFormConfiguration = /* GraphQL */ `mutation UpdateEvolinciteFormConfiguration(
  $input: UpdateEvolinciteFormConfigurationInput!
  $condition: ModelEvolinciteFormConfigurationConditionInput
) {
  updateEvolinciteFormConfiguration(input: $input, condition: $condition) {
    id
    key
    name
    config
    meta
    title
    description
    observations
    front
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteFormConfigurationMutationVariables,
  APITypes.UpdateEvolinciteFormConfigurationMutation
>;
export const deleteEvolinciteFormConfiguration = /* GraphQL */ `mutation DeleteEvolinciteFormConfiguration(
  $input: DeleteEvolinciteFormConfigurationInput!
  $condition: ModelEvolinciteFormConfigurationConditionInput
) {
  deleteEvolinciteFormConfiguration(input: $input, condition: $condition) {
    id
    key
    name
    config
    meta
    title
    description
    observations
    front
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteFormConfigurationMutationVariables,
  APITypes.DeleteEvolinciteFormConfigurationMutation
>;
export const createEvolinciteFormAnswer = /* GraphQL */ `mutation CreateEvolinciteFormAnswer(
  $input: CreateEvolinciteFormAnswerInput!
  $condition: ModelEvolinciteFormAnswerConditionInput
) {
  createEvolinciteFormAnswer(input: $input, condition: $condition) {
    id
    meta
    answerState
    state
    evolinciteUserID
    evolinciteFormConfigurationID
    EvolinciteFormConfiguration {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteFormAnswerMutationVariables,
  APITypes.CreateEvolinciteFormAnswerMutation
>;
export const updateEvolinciteFormAnswer = /* GraphQL */ `mutation UpdateEvolinciteFormAnswer(
  $input: UpdateEvolinciteFormAnswerInput!
  $condition: ModelEvolinciteFormAnswerConditionInput
) {
  updateEvolinciteFormAnswer(input: $input, condition: $condition) {
    id
    meta
    answerState
    state
    evolinciteUserID
    evolinciteFormConfigurationID
    EvolinciteFormConfiguration {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteFormAnswerMutationVariables,
  APITypes.UpdateEvolinciteFormAnswerMutation
>;
export const deleteEvolinciteFormAnswer = /* GraphQL */ `mutation DeleteEvolinciteFormAnswer(
  $input: DeleteEvolinciteFormAnswerInput!
  $condition: ModelEvolinciteFormAnswerConditionInput
) {
  deleteEvolinciteFormAnswer(input: $input, condition: $condition) {
    id
    meta
    answerState
    state
    evolinciteUserID
    evolinciteFormConfigurationID
    EvolinciteFormConfiguration {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteFormAnswerMutationVariables,
  APITypes.DeleteEvolinciteFormAnswerMutation
>;
export const createEvolincitePaymentAutomation = /* GraphQL */ `mutation CreateEvolincitePaymentAutomation(
  $input: CreateEvolincitePaymentAutomationInput!
  $condition: ModelEvolincitePaymentAutomationConditionInput
) {
  createEvolincitePaymentAutomation(input: $input, condition: $condition) {
    id
    name
    setting
    order
    repeat
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolincitePaymentAutomationMutationVariables,
  APITypes.CreateEvolincitePaymentAutomationMutation
>;
export const updateEvolincitePaymentAutomation = /* GraphQL */ `mutation UpdateEvolincitePaymentAutomation(
  $input: UpdateEvolincitePaymentAutomationInput!
  $condition: ModelEvolincitePaymentAutomationConditionInput
) {
  updateEvolincitePaymentAutomation(input: $input, condition: $condition) {
    id
    name
    setting
    order
    repeat
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolincitePaymentAutomationMutationVariables,
  APITypes.UpdateEvolincitePaymentAutomationMutation
>;
export const deleteEvolincitePaymentAutomation = /* GraphQL */ `mutation DeleteEvolincitePaymentAutomation(
  $input: DeleteEvolincitePaymentAutomationInput!
  $condition: ModelEvolincitePaymentAutomationConditionInput
) {
  deleteEvolincitePaymentAutomation(input: $input, condition: $condition) {
    id
    name
    setting
    order
    repeat
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolincitePaymentAutomationMutationVariables,
  APITypes.DeleteEvolincitePaymentAutomationMutation
>;
export const createEvolinciteMail = /* GraphQL */ `mutation CreateEvolinciteMail(
  $input: CreateEvolinciteMailInput!
  $condition: ModelEvolinciteMailConditionInput
) {
  createEvolinciteMail(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    submissionStatus
    setting
    response
    files
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMailMutationVariables,
  APITypes.CreateEvolinciteMailMutation
>;
export const updateEvolinciteMail = /* GraphQL */ `mutation UpdateEvolinciteMail(
  $input: UpdateEvolinciteMailInput!
  $condition: ModelEvolinciteMailConditionInput
) {
  updateEvolinciteMail(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    submissionStatus
    setting
    response
    files
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMailMutationVariables,
  APITypes.UpdateEvolinciteMailMutation
>;
export const deleteEvolinciteMail = /* GraphQL */ `mutation DeleteEvolinciteMail(
  $input: DeleteEvolinciteMailInput!
  $condition: ModelEvolinciteMailConditionInput
) {
  deleteEvolinciteMail(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    submissionStatus
    setting
    response
    files
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMailMutationVariables,
  APITypes.DeleteEvolinciteMailMutation
>;
export const createEvolinciteMailConfiguration = /* GraphQL */ `mutation CreateEvolinciteMailConfiguration(
  $input: CreateEvolinciteMailConfigurationInput!
  $condition: ModelEvolinciteMailConfigurationConditionInput
) {
  createEvolinciteMailConfiguration(input: $input, condition: $condition) {
    id
    SMTP
    email
    password
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMailConfigurationMutationVariables,
  APITypes.CreateEvolinciteMailConfigurationMutation
>;
export const updateEvolinciteMailConfiguration = /* GraphQL */ `mutation UpdateEvolinciteMailConfiguration(
  $input: UpdateEvolinciteMailConfigurationInput!
  $condition: ModelEvolinciteMailConfigurationConditionInput
) {
  updateEvolinciteMailConfiguration(input: $input, condition: $condition) {
    id
    SMTP
    email
    password
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMailConfigurationMutationVariables,
  APITypes.UpdateEvolinciteMailConfigurationMutation
>;
export const deleteEvolinciteMailConfiguration = /* GraphQL */ `mutation DeleteEvolinciteMailConfiguration(
  $input: DeleteEvolinciteMailConfigurationInput!
  $condition: ModelEvolinciteMailConfigurationConditionInput
) {
  deleteEvolinciteMailConfiguration(input: $input, condition: $condition) {
    id
    SMTP
    email
    password
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMailConfigurationMutationVariables,
  APITypes.DeleteEvolinciteMailConfigurationMutation
>;
export const createEvolinciteMailTemplate = /* GraphQL */ `mutation CreateEvolinciteMailTemplate(
  $input: CreateEvolinciteMailTemplateInput!
  $condition: ModelEvolinciteMailTemplateConditionInput
) {
  createEvolinciteMailTemplate(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    files
    transmitter
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMailTemplateMutationVariables,
  APITypes.CreateEvolinciteMailTemplateMutation
>;
export const updateEvolinciteMailTemplate = /* GraphQL */ `mutation UpdateEvolinciteMailTemplate(
  $input: UpdateEvolinciteMailTemplateInput!
  $condition: ModelEvolinciteMailTemplateConditionInput
) {
  updateEvolinciteMailTemplate(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    files
    transmitter
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMailTemplateMutationVariables,
  APITypes.UpdateEvolinciteMailTemplateMutation
>;
export const deleteEvolinciteMailTemplate = /* GraphQL */ `mutation DeleteEvolinciteMailTemplate(
  $input: DeleteEvolinciteMailTemplateInput!
  $condition: ModelEvolinciteMailTemplateConditionInput
) {
  deleteEvolinciteMailTemplate(input: $input, condition: $condition) {
    id
    destinations
    subject
    content
    files
    transmitter
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMailTemplateMutationVariables,
  APITypes.DeleteEvolinciteMailTemplateMutation
>;
export const createEvolinciteMailTemplateLog = /* GraphQL */ `mutation CreateEvolinciteMailTemplateLog(
  $input: CreateEvolinciteMailTemplateLogInput!
  $condition: ModelEvolinciteMailTemplateLogConditionInput
) {
  createEvolinciteMailTemplateLog(input: $input, condition: $condition) {
    id
    key
    log
    date
    previousLog
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMailTemplateLogMutationVariables,
  APITypes.CreateEvolinciteMailTemplateLogMutation
>;
export const updateEvolinciteMailTemplateLog = /* GraphQL */ `mutation UpdateEvolinciteMailTemplateLog(
  $input: UpdateEvolinciteMailTemplateLogInput!
  $condition: ModelEvolinciteMailTemplateLogConditionInput
) {
  updateEvolinciteMailTemplateLog(input: $input, condition: $condition) {
    id
    key
    log
    date
    previousLog
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMailTemplateLogMutationVariables,
  APITypes.UpdateEvolinciteMailTemplateLogMutation
>;
export const deleteEvolinciteMailTemplateLog = /* GraphQL */ `mutation DeleteEvolinciteMailTemplateLog(
  $input: DeleteEvolinciteMailTemplateLogInput!
  $condition: ModelEvolinciteMailTemplateLogConditionInput
) {
  deleteEvolinciteMailTemplateLog(input: $input, condition: $condition) {
    id
    key
    log
    date
    previousLog
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMailTemplateLogMutationVariables,
  APITypes.DeleteEvolinciteMailTemplateLogMutation
>;
export const createEvolincitePackage = /* GraphQL */ `mutation CreateEvolincitePackage(
  $input: CreateEvolincitePackageInput!
  $condition: ModelEvolincitePackageConditionInput
) {
  createEvolincitePackage(input: $input, condition: $condition) {
    id
    name
    description
    goal
    duration
    state
    EvolinciteFunctionalities {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolincitePackageMutationVariables,
  APITypes.CreateEvolincitePackageMutation
>;
export const updateEvolincitePackage = /* GraphQL */ `mutation UpdateEvolincitePackage(
  $input: UpdateEvolincitePackageInput!
  $condition: ModelEvolincitePackageConditionInput
) {
  updateEvolincitePackage(input: $input, condition: $condition) {
    id
    name
    description
    goal
    duration
    state
    EvolinciteFunctionalities {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolincitePackageMutationVariables,
  APITypes.UpdateEvolincitePackageMutation
>;
export const deleteEvolincitePackage = /* GraphQL */ `mutation DeleteEvolincitePackage(
  $input: DeleteEvolincitePackageInput!
  $condition: ModelEvolincitePackageConditionInput
) {
  deleteEvolincitePackage(input: $input, condition: $condition) {
    id
    name
    description
    goal
    duration
    state
    EvolinciteFunctionalities {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolincitePackageMutationVariables,
  APITypes.DeleteEvolincitePackageMutation
>;
export const createEvolinciteCompanySubscription = /* GraphQL */ `mutation CreateEvolinciteCompanySubscription(
  $input: CreateEvolinciteCompanySubscriptionInput!
  $condition: ModelEvolinciteCompanySubscriptionConditionInput
) {
  createEvolinciteCompanySubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    activatorUser
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteCompanySubscriptionMutationVariables,
  APITypes.CreateEvolinciteCompanySubscriptionMutation
>;
export const updateEvolinciteCompanySubscription = /* GraphQL */ `mutation UpdateEvolinciteCompanySubscription(
  $input: UpdateEvolinciteCompanySubscriptionInput!
  $condition: ModelEvolinciteCompanySubscriptionConditionInput
) {
  updateEvolinciteCompanySubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    activatorUser
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteCompanySubscriptionMutationVariables,
  APITypes.UpdateEvolinciteCompanySubscriptionMutation
>;
export const deleteEvolinciteCompanySubscription = /* GraphQL */ `mutation DeleteEvolinciteCompanySubscription(
  $input: DeleteEvolinciteCompanySubscriptionInput!
  $condition: ModelEvolinciteCompanySubscriptionConditionInput
) {
  deleteEvolinciteCompanySubscription(input: $input, condition: $condition) {
    id
    name
    price
    dateInitial
    dateFinal
    activatorUser
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteCompanySubscriptionMutationVariables,
  APITypes.DeleteEvolinciteCompanySubscriptionMutation
>;
export const createEvolinciteEmployeeObservation = /* GraphQL */ `mutation CreateEvolinciteEmployeeObservation(
  $input: CreateEvolinciteEmployeeObservationInput!
  $condition: ModelEvolinciteEmployeeObservationConditionInput
) {
  createEvolinciteEmployeeObservation(input: $input, condition: $condition) {
    id
    name
    content
    isPublic
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteEmployeeObservationMutationVariables,
  APITypes.CreateEvolinciteEmployeeObservationMutation
>;
export const updateEvolinciteEmployeeObservation = /* GraphQL */ `mutation UpdateEvolinciteEmployeeObservation(
  $input: UpdateEvolinciteEmployeeObservationInput!
  $condition: ModelEvolinciteEmployeeObservationConditionInput
) {
  updateEvolinciteEmployeeObservation(input: $input, condition: $condition) {
    id
    name
    content
    isPublic
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteEmployeeObservationMutationVariables,
  APITypes.UpdateEvolinciteEmployeeObservationMutation
>;
export const deleteEvolinciteEmployeeObservation = /* GraphQL */ `mutation DeleteEvolinciteEmployeeObservation(
  $input: DeleteEvolinciteEmployeeObservationInput!
  $condition: ModelEvolinciteEmployeeObservationConditionInput
) {
  deleteEvolinciteEmployeeObservation(input: $input, condition: $condition) {
    id
    name
    content
    isPublic
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteEmployeeObservationMutationVariables,
  APITypes.DeleteEvolinciteEmployeeObservationMutation
>;
export const createEvolinciteTag = /* GraphQL */ `mutation CreateEvolinciteTag(
  $input: CreateEvolinciteTagInput!
  $condition: ModelEvolinciteTagConditionInput
) {
  createEvolinciteTag(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteTagMutationVariables,
  APITypes.CreateEvolinciteTagMutation
>;
export const updateEvolinciteTag = /* GraphQL */ `mutation UpdateEvolinciteTag(
  $input: UpdateEvolinciteTagInput!
  $condition: ModelEvolinciteTagConditionInput
) {
  updateEvolinciteTag(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteTagMutationVariables,
  APITypes.UpdateEvolinciteTagMutation
>;
export const deleteEvolinciteTag = /* GraphQL */ `mutation DeleteEvolinciteTag(
  $input: DeleteEvolinciteTagInput!
  $condition: ModelEvolinciteTagConditionInput
) {
  deleteEvolinciteTag(input: $input, condition: $condition) {
    id
    name
    description
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteTagMutationVariables,
  APITypes.DeleteEvolinciteTagMutation
>;
export const createEvolinciteMilestone = /* GraphQL */ `mutation CreateEvolinciteMilestone(
  $input: CreateEvolinciteMilestoneInput!
  $condition: ModelEvolinciteMilestoneConditionInput
) {
  createEvolinciteMilestone(input: $input, condition: $condition) {
    name
    description
    tags
    type
    config
    startDate
    endDate
    employees
    managers
    isClosed
    closingNotes
    log
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteMilestoneMutationVariables,
  APITypes.CreateEvolinciteMilestoneMutation
>;
export const updateEvolinciteMilestone = /* GraphQL */ `mutation UpdateEvolinciteMilestone(
  $input: UpdateEvolinciteMilestoneInput!
  $condition: ModelEvolinciteMilestoneConditionInput
) {
  updateEvolinciteMilestone(input: $input, condition: $condition) {
    name
    description
    tags
    type
    config
    startDate
    endDate
    employees
    managers
    isClosed
    closingNotes
    log
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteMilestoneMutationVariables,
  APITypes.UpdateEvolinciteMilestoneMutation
>;
export const deleteEvolinciteMilestone = /* GraphQL */ `mutation DeleteEvolinciteMilestone(
  $input: DeleteEvolinciteMilestoneInput!
  $condition: ModelEvolinciteMilestoneConditionInput
) {
  deleteEvolinciteMilestone(input: $input, condition: $condition) {
    name
    description
    tags
    type
    config
    startDate
    endDate
    employees
    managers
    isClosed
    closingNotes
    log
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteMilestoneMutationVariables,
  APITypes.DeleteEvolinciteMilestoneMutation
>;
export const createEvolinciteUserLog = /* GraphQL */ `mutation CreateEvolinciteUserLog(
  $input: CreateEvolinciteUserLogInput!
  $condition: ModelEvolinciteUserLogConditionInput
) {
  createEvolinciteUserLog(input: $input, condition: $condition) {
    id
    log
    functionality
    state
    key
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserLogMutationVariables,
  APITypes.CreateEvolinciteUserLogMutation
>;
export const updateEvolinciteUserLog = /* GraphQL */ `mutation UpdateEvolinciteUserLog(
  $input: UpdateEvolinciteUserLogInput!
  $condition: ModelEvolinciteUserLogConditionInput
) {
  updateEvolinciteUserLog(input: $input, condition: $condition) {
    id
    log
    functionality
    state
    key
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserLogMutationVariables,
  APITypes.UpdateEvolinciteUserLogMutation
>;
export const deleteEvolinciteUserLog = /* GraphQL */ `mutation DeleteEvolinciteUserLog(
  $input: DeleteEvolinciteUserLogInput!
  $condition: ModelEvolinciteUserLogConditionInput
) {
  deleteEvolinciteUserLog(input: $input, condition: $condition) {
    id
    log
    functionality
    state
    key
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserLogMutationVariables,
  APITypes.DeleteEvolinciteUserLogMutation
>;
export const createEvolinciteUserTimeTracking = /* GraphQL */ `mutation CreateEvolinciteUserTimeTracking(
  $input: CreateEvolinciteUserTimeTrackingInput!
  $condition: ModelEvolinciteUserTimeTrackingConditionInput
) {
  createEvolinciteUserTimeTracking(input: $input, condition: $condition) {
    id
    time
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserTimeTrackingMutationVariables,
  APITypes.CreateEvolinciteUserTimeTrackingMutation
>;
export const updateEvolinciteUserTimeTracking = /* GraphQL */ `mutation UpdateEvolinciteUserTimeTracking(
  $input: UpdateEvolinciteUserTimeTrackingInput!
  $condition: ModelEvolinciteUserTimeTrackingConditionInput
) {
  updateEvolinciteUserTimeTracking(input: $input, condition: $condition) {
    id
    time
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserTimeTrackingMutationVariables,
  APITypes.UpdateEvolinciteUserTimeTrackingMutation
>;
export const deleteEvolinciteUserTimeTracking = /* GraphQL */ `mutation DeleteEvolinciteUserTimeTracking(
  $input: DeleteEvolinciteUserTimeTrackingInput!
  $condition: ModelEvolinciteUserTimeTrackingConditionInput
) {
  deleteEvolinciteUserTimeTracking(input: $input, condition: $condition) {
    id
    time
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserTimeTrackingMutationVariables,
  APITypes.DeleteEvolinciteUserTimeTrackingMutation
>;
export const createEvolinciteSchedule = /* GraphQL */ `mutation CreateEvolinciteSchedule(
  $input: CreateEvolinciteScheduleInput!
  $condition: ModelEvolinciteScheduleConditionInput
) {
  createEvolinciteSchedule(input: $input, condition: $condition) {
    id
    name
    description
    config
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteScheduleMutationVariables,
  APITypes.CreateEvolinciteScheduleMutation
>;
export const updateEvolinciteSchedule = /* GraphQL */ `mutation UpdateEvolinciteSchedule(
  $input: UpdateEvolinciteScheduleInput!
  $condition: ModelEvolinciteScheduleConditionInput
) {
  updateEvolinciteSchedule(input: $input, condition: $condition) {
    id
    name
    description
    config
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteScheduleMutationVariables,
  APITypes.UpdateEvolinciteScheduleMutation
>;
export const deleteEvolinciteSchedule = /* GraphQL */ `mutation DeleteEvolinciteSchedule(
  $input: DeleteEvolinciteScheduleInput!
  $condition: ModelEvolinciteScheduleConditionInput
) {
  deleteEvolinciteSchedule(input: $input, condition: $condition) {
    id
    name
    description
    config
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteScheduleMutationVariables,
  APITypes.DeleteEvolinciteScheduleMutation
>;
export const createEvolinciteTemplateRequest = /* GraphQL */ `mutation CreateEvolinciteTemplateRequest(
  $input: CreateEvolinciteTemplateRequestInput!
  $condition: ModelEvolinciteTemplateRequestConditionInput
) {
  createEvolinciteTemplateRequest(input: $input, condition: $condition) {
    id
    name
    description
    tags
    questions
    elementType
    documents
    meta
    owners
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteTemplateRequestMutationVariables,
  APITypes.CreateEvolinciteTemplateRequestMutation
>;
export const updateEvolinciteTemplateRequest = /* GraphQL */ `mutation UpdateEvolinciteTemplateRequest(
  $input: UpdateEvolinciteTemplateRequestInput!
  $condition: ModelEvolinciteTemplateRequestConditionInput
) {
  updateEvolinciteTemplateRequest(input: $input, condition: $condition) {
    id
    name
    description
    tags
    questions
    elementType
    documents
    meta
    owners
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteTemplateRequestMutationVariables,
  APITypes.UpdateEvolinciteTemplateRequestMutation
>;
export const deleteEvolinciteTemplateRequest = /* GraphQL */ `mutation DeleteEvolinciteTemplateRequest(
  $input: DeleteEvolinciteTemplateRequestInput!
  $condition: ModelEvolinciteTemplateRequestConditionInput
) {
  deleteEvolinciteTemplateRequest(input: $input, condition: $condition) {
    id
    name
    description
    tags
    questions
    elementType
    documents
    meta
    owners
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteTemplateRequestMutationVariables,
  APITypes.DeleteEvolinciteTemplateRequestMutation
>;
export const createEvolinciteRequest = /* GraphQL */ `mutation CreateEvolinciteRequest(
  $input: CreateEvolinciteRequestInput!
  $condition: ModelEvolinciteRequestConditionInput
) {
  createEvolinciteRequest(input: $input, condition: $condition) {
    id
    templateID
    answers
    requester
    priority
    elementID
    elementType
    status
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteRequestMutationVariables,
  APITypes.CreateEvolinciteRequestMutation
>;
export const updateEvolinciteRequest = /* GraphQL */ `mutation UpdateEvolinciteRequest(
  $input: UpdateEvolinciteRequestInput!
  $condition: ModelEvolinciteRequestConditionInput
) {
  updateEvolinciteRequest(input: $input, condition: $condition) {
    id
    templateID
    answers
    requester
    priority
    elementID
    elementType
    status
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteRequestMutationVariables,
  APITypes.UpdateEvolinciteRequestMutation
>;
export const deleteEvolinciteRequest = /* GraphQL */ `mutation DeleteEvolinciteRequest(
  $input: DeleteEvolinciteRequestInput!
  $condition: ModelEvolinciteRequestConditionInput
) {
  deleteEvolinciteRequest(input: $input, condition: $condition) {
    id
    templateID
    answers
    requester
    priority
    elementID
    elementType
    status
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteRequestMutationVariables,
  APITypes.DeleteEvolinciteRequestMutation
>;
export const createEvolinciteActivityEvolinciteUser = /* GraphQL */ `mutation CreateEvolinciteActivityEvolinciteUser(
  $input: CreateEvolinciteActivityEvolinciteUserInput!
  $condition: ModelEvolinciteActivityEvolinciteUserConditionInput
) {
  createEvolinciteActivityEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteActivityId
    evolinciteUserId
    evolinciteActivity {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteActivityEvolinciteUserMutationVariables,
  APITypes.CreateEvolinciteActivityEvolinciteUserMutation
>;
export const updateEvolinciteActivityEvolinciteUser = /* GraphQL */ `mutation UpdateEvolinciteActivityEvolinciteUser(
  $input: UpdateEvolinciteActivityEvolinciteUserInput!
  $condition: ModelEvolinciteActivityEvolinciteUserConditionInput
) {
  updateEvolinciteActivityEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteActivityId
    evolinciteUserId
    evolinciteActivity {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteActivityEvolinciteUserMutationVariables,
  APITypes.UpdateEvolinciteActivityEvolinciteUserMutation
>;
export const deleteEvolinciteActivityEvolinciteUser = /* GraphQL */ `mutation DeleteEvolinciteActivityEvolinciteUser(
  $input: DeleteEvolinciteActivityEvolinciteUserInput!
  $condition: ModelEvolinciteActivityEvolinciteUserConditionInput
) {
  deleteEvolinciteActivityEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteActivityId
    evolinciteUserId
    evolinciteActivity {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteActivityEvolinciteUserMutationVariables,
  APITypes.DeleteEvolinciteActivityEvolinciteUserMutation
>;
export const createEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `mutation CreateEvolinciteUserEvolinciteCrmNegotiation(
  $input: CreateEvolinciteUserEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteUserEvolinciteCrmNegotiationConditionInput
) {
  createEvolinciteUserEvolinciteCrmNegotiation(
    input: $input
    condition: $condition
  ) {
    id
    evolinciteCrmNegotiationId
    evolinciteUserId
    evolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteUserEvolinciteCrmNegotiationMutationVariables,
  APITypes.CreateEvolinciteUserEvolinciteCrmNegotiationMutation
>;
export const updateEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `mutation UpdateEvolinciteUserEvolinciteCrmNegotiation(
  $input: UpdateEvolinciteUserEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteUserEvolinciteCrmNegotiationConditionInput
) {
  updateEvolinciteUserEvolinciteCrmNegotiation(
    input: $input
    condition: $condition
  ) {
    id
    evolinciteCrmNegotiationId
    evolinciteUserId
    evolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteUserEvolinciteCrmNegotiationMutationVariables,
  APITypes.UpdateEvolinciteUserEvolinciteCrmNegotiationMutation
>;
export const deleteEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `mutation DeleteEvolinciteUserEvolinciteCrmNegotiation(
  $input: DeleteEvolinciteUserEvolinciteCrmNegotiationInput!
  $condition: ModelEvolinciteUserEvolinciteCrmNegotiationConditionInput
) {
  deleteEvolinciteUserEvolinciteCrmNegotiation(
    input: $input
    condition: $condition
  ) {
    id
    evolinciteCrmNegotiationId
    evolinciteUserId
    evolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteUserEvolinciteCrmNegotiationMutationVariables,
  APITypes.DeleteEvolinciteUserEvolinciteCrmNegotiationMutation
>;
export const createEvolinciteRoomEvolinciteUser = /* GraphQL */ `mutation CreateEvolinciteRoomEvolinciteUser(
  $input: CreateEvolinciteRoomEvolinciteUserInput!
  $condition: ModelEvolinciteRoomEvolinciteUserConditionInput
) {
  createEvolinciteRoomEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteRoomId
    evolinciteUserId
    evolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEvolinciteRoomEvolinciteUserMutationVariables,
  APITypes.CreateEvolinciteRoomEvolinciteUserMutation
>;
export const updateEvolinciteRoomEvolinciteUser = /* GraphQL */ `mutation UpdateEvolinciteRoomEvolinciteUser(
  $input: UpdateEvolinciteRoomEvolinciteUserInput!
  $condition: ModelEvolinciteRoomEvolinciteUserConditionInput
) {
  updateEvolinciteRoomEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteRoomId
    evolinciteUserId
    evolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEvolinciteRoomEvolinciteUserMutationVariables,
  APITypes.UpdateEvolinciteRoomEvolinciteUserMutation
>;
export const deleteEvolinciteRoomEvolinciteUser = /* GraphQL */ `mutation DeleteEvolinciteRoomEvolinciteUser(
  $input: DeleteEvolinciteRoomEvolinciteUserInput!
  $condition: ModelEvolinciteRoomEvolinciteUserConditionInput
) {
  deleteEvolinciteRoomEvolinciteUser(input: $input, condition: $condition) {
    id
    evolinciteRoomId
    evolinciteUserId
    evolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEvolinciteRoomEvolinciteUserMutationVariables,
  APITypes.DeleteEvolinciteRoomEvolinciteUserMutation
>;
