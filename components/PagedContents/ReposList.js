import React from 'react'
import R from 'ramda'

import { RepoItemLoading } from '../LoadingEffects'
import RepoItem from '../RepoItem'

import EmptyThread from '../EmptyThread'
import EmptyLabel from '../EmptyLabel'

import { uid, TYPE, Trans } from '../../utils'

const ReposList = ({
  entries,
  curView,
  community,
  thread,
  emptyPrefix,
  active,
}) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <RepoItem
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={console.log}
            />
          ))}
        </React.Fragment>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <React.Fragment>
          {R.isEmpty(emptyPrefix) ? (
            <EmptyThread community={community} thread={thread} />
          ) : (
            <EmptyLabel
              text={`${emptyPrefix}${Trans(thread)}信息`}
              size="large"
            />
          )}
        </React.Fragment>
      )
    }
    default:
      return <RepoItemLoading num={4} />
  }
}

export default ReposList
