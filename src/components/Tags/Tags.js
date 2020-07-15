import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import styled from '@emotion/styled';

const Tag = styled.li`
  margin-right: 0.25rem;
`;
const TagList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

function Tags({ tags }) {
  const sortedTags = orderBy(tags, [tag => tag.toLowerCase()], ['asc']);
  return (
    <TagList>
      <Tag>tags: </Tag>
      {sortedTags.map((tag, index, arr) => (
        <Tag key={tag}>
          {tag}
          {index !== arr.length - 1 ? ', ' : ''}
        </Tag>
      ))}
    </TagList>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
