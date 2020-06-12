export default ({ creditCard, firstName, loading, lastName, telephone }) => (
  <div className="table table-row">
    <p className={loading ? "loading" : ""}>
      {firstName} {lastName}
    </p>{" "}
    <p className={`telephone ${loading ? "loading" : ""}`}>{telephone}</p>
    <p className={`credit-card credit-card-number ${loading ? "loading" : ""}`}>
      {creditCard && <img className="card" src="/card.svg" />}
      {creditCard}
    </p>
    <style jsx>{`
      .table {
        align-items: center;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 3fr 3fr 4fr;
        padding: 0 32px;
      }
      .table-row {
        align-items: center;
        border: none;
        border-top: 1px solid #eaeaea;
        height: 64px;
      }

      .credit-card {
        align-items: center;
        margin-left: auto;
      }
      .credit-card-number {
        display: flex;
      }
      @keyframes Loading {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .loading {
        animation: Loading 2s ease infinite;
        background: linear-gradient(270deg, #d1d1d1, #eaeaea);
        background-size: 200% 200%;
        height: 16px;
        width: 80%;
      }
      img {
        height: 24px;
        margin-right: 8px;
      }
      @media screen and (max-width: 580px) {
        .table {
          padding: 0 16px;
        }
      }
    `}</style>
  </div>
);
