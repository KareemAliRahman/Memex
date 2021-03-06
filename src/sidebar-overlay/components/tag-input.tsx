import * as React from 'react'

import { IndexDropdown } from 'src/common-ui/containers'
import TagHolder from './tag-holder'

interface Props {
    env?: 'inpage' | 'overview'
    isTagInputActive: boolean
    tags: string[]
    initTagSuggestions?: string[]
    addTag: (tag: string) => void
    deleteTag: (tag: string) => void
    setTagInputActive: (isTagInputActive: boolean) => void
}

/* tslint:disable-next-line variable-name */
const TagInput = ({
    isTagInputActive,
    tags,
    initTagSuggestions,
    addTag,
    deleteTag,
    setTagInputActive,
    env,
}: Props) => {
    if (isTagInputActive) {
        return (
            <IndexDropdown
                env={env}
                isForAnnotation
                allowAdd
                initFilters={tags}
                initSuggestions={initTagSuggestions}
                onFilterAdd={addTag}
                onFilterDel={deleteTag}
                source="tag"
            />
        )
    }

    return (
        <TagHolder
            tags={tags}
            clickHandler={e => {
                e.stopPropagation()
                setTagInputActive(true)
            }}
            deleteTag={deleteTag}
        />
    )
}

export default TagInput
