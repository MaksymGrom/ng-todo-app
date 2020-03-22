import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todo: {}
};

const pluralNames = {
  Todo: 'Todo'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
