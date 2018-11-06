import React from 'react'

import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

import { prettyNum, numberWithCommas } from '../../utils'

const ReactionNumbers = ({ data: { views, favoritedCount, starredCount } }) => (
  <NumbersInfo>
    <NumberSection dead>
      <NumberTitle dead>浏览</NumberTitle>
      <NumberItem dead>{prettyNum(views)}</NumberItem>
    </NumberSection>
    {starredCount >= 0 ? (
      <React.Fragment>
        <NumberDivider />
        <NumberSection>
          <NumberTitle>喜欢</NumberTitle>
          <NumberItem>{numberWithCommas(starredCount)}</NumberItem>
        </NumberSection>
        <NumberDivider />
      </React.Fragment>
    ) : null}
    {favoritedCount >= 0 ? (
      <NumberSection>
        <NumberTitle>收藏</NumberTitle>
        <NumberItem>{numberWithCommas(favoritedCount)}</NumberItem>
      </NumberSection>
    ) : null}
    {/*
        <NumberDivider />
        <NumberSection>
        <NumberTitle>关注</NumberTitle>
        <NumberItem>TD</NumberItem>
        </NumberSection>
      */}
  </NumbersInfo>
)

export default ReactionNumbers