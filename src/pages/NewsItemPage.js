import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

export function NewsItemPage() {
  const { id: idParam } = useParams();
  const id = parseInt(idParam, 10);
  const isNewsIsValid = !Number.isNaN(id);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  console.log('-----------------', {
    hello: searchParams.get('hello'),
    test: searchParams.get('test'),
  });

  const handleBackToList = useCallback(() => {
    navigate('/news');
  }, [navigate]);

  useEffect(() => {
    if (!isNewsIsValid) {
      handleBackToList();
    }
  }, [isNewsIsValid, handleBackToList]) ;

  return (
    <div className="">
      {isNewsIsValid && (
        <div>Loading news "{id}"...</div>
      )}
      <div>
        <button onClick={handleBackToList}>Back to the list</button>
      </div>
    </div>
  );
}

NewsItemPage.propTypes = {};
