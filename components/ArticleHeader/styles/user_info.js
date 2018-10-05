import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`
export const UserName = styled.div`
  font-size: 0.9rem;
  color: ${theme('thread.articleTitle')};
`
export const PublishAt = styled.div`
  font-size: 0.8rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled(Img)`
  border-radius: 100%;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
