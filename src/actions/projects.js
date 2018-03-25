import {createAction} from 'redux-actions';

export const projectCreated = createAction(
  'PROJECT_CREATED',
  projectKey => ({projectKey}),
);

export const createProject = createAction('CREATE_PROJECT');

export const changeCurrentProject = createAction(
  'CHANGE_CURRENT_PROJECT',
  projectKey => ({projectKey}),
);

export const updateProjectSource = createAction(
  'UPDATE_PROJECT_SOURCE',
  (projectKey, language, newValue) => ({projectKey, language, newValue}),
  (_projectKey, _language, _newValue, timestamp = Date.now()) => ({timestamp}),
);

export const updateProjectInstructions = createAction(
  'UPDATE_PROJECT_INSTRUCTIONS',
  (projectKey, newValue) => ({projectKey, newValue}),
);

export const toggleLibrary = createAction(
  'TOGGLE_LIBRARY',
  (projectKey, libraryKey) => ({projectKey, libraryKey}),
  (_projectKey, _libraryKey, timestamp = Date.now()) => ({timestamp}),
);

export const storeHiddenComponentLine = createAction(
  'STORE_HIDDEN_LINE',
  (projectKey, componentKey, line, column) =>
    ({projectKey, componentKey, line, column}),
);

export const toggleComponent = createAction(
  'TOGGLE_COMPONENT',
  (projectKey, componentKey, hiddenUIComponent) =>
    ({projectKey, componentKey, hiddenUIComponent}),
  (projectKey, componentKey, hiddenUIComponent, timestamp = Date.now()) =>
    ({timestamp}),
);

export const gistImported = createAction(
  'GIST_IMPORTED',
  (projectKey, gistData) => ({projectKey, gistData}),
);

export const gistNotFound = createAction(
  'GIST_NOT_FOUND',
  gistId => ({gistId}),
);

export const gistImportError = createAction(
  'GIST_IMPORT_ERROR',
  gistId => ({gistId}),
);

export const projectsLoaded = createAction('PROJECTS_LOADED');
