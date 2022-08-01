import { useState, useEffect } from 'preact/hooks';

export const useComments = () => {
  const [comments, setComments] = useState([]);

  // TODO: This is a infinite useEffect
  useEffect(() => {
    const archive = [],
      keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      archive.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setComments(archive);
  }, [comments]);

  return [comments];
};

export const deleteComment = ({ id }) => localStorage.removeItem(`user${id}`);
