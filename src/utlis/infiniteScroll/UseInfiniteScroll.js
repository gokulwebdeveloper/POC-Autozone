import { useState, useEffect } from "react";
import $ from 'jquery';

const UseInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.warn("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    $(window).scroll(function () {
      if (
        $(window).scrollTop() + $(window).height() <
          $(document).height() - 400 ||
        isFetching
      ) {
        return;
      }
      setIsFetching(true);
    });
  }

  return [isFetching, setIsFetching];
};

export default UseInfiniteScroll;
