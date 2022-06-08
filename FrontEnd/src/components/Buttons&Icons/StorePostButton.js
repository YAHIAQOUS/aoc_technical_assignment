/** @format */

import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import StorePostModal from '../Modals/StorePostModal';

const StorePostButton = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const PostModalShowing = () => {
    setShowPostModal(!showPostModal);
  };

  return (
    <>
      {/* Post Service Modal */}
      {showPostModal && <StorePostModal PostModalShowing={PostModalShowing} />}

      <Button
        size='lg'
        style={{ position: 'absolute', right: 0 }}
        onClick={PostModalShowing}>
        Create Your Store
      </Button>
    </>
  );
};
export default StorePostButton;
