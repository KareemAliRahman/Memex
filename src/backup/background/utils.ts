import { CollectionDefinition } from 'storex/lib/types'

export function isExcludedFromBackup(collection: CollectionDefinition) {
    return collection.backup === false
}
