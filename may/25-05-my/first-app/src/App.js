function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <nav className="form-navbar"></nav>
      <form className="user-input" onSubmit={handelSubmit}>
        <input type="text" placeholder="Firstname" className="input-field" />
        <input type="text" placeholder="Lastname" className="input-field" />
      </form>

      <footer className="form-footer">
        <p className="cobyright">
          Copyright<sup>© </sup>
          <span id="year">{new Date().getFullYear()}</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
