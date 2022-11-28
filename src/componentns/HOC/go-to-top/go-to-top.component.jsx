import "./go-to-top.style.scss";
const GoToTop = () => {
  function handleTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return <div onClick={handleTop}>Click</div>;
};

export default GoToTop;
