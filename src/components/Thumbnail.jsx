import styled from "styled-components";

const ThumbnailWrapper = styled.article`
  &:hover {
    /*transform: scale(1.03);
    z-index: 2;*/
    filter: grayscale(100%) blur(3px);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  transition: 0.5s ease-out;
  cursor: pointer;

  &.thumbnail-wrapper--isProjectsPage {
    border-radius: 10px;
  }
`;

const Thumbnail = ({ item, onClick, isProjectsPage }) => {
  //  function getClassName(selected) {
  //    if (selected) {
  //      return "thumbnail selected";
  //    } else {
  //      return "thumbnail";
  //    }
  //  }
  return (
    <ThumbnailWrapper
      className={
        isProjectsPage
          ? "thumbnail-wrapper thumbnail-wrapper--isProjectsPage"
          : "thumbnail-wrapper"
      }
      onClick={() => {
        onClick(item.id);
      }}
      //  className={getClassName(item.opened)}
    >
      <picture className="thumbnail">
        <source type="image/webp" srcSet={item.thumbnail.webp} />
        <source type="image/jpg" srcSet={item.thumbnail.jpg} />
        <img src={item.thumbnail.jpg} alt="My video project" />
      </picture>
    </ThumbnailWrapper>
  );
};

export default Thumbnail;
