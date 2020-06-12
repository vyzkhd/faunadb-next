import { useState, useEffect } from "react";
import Head from "next/head";
import TableRow from "../components/TableRow";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api");
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);

  return (
    <div>
      <main>
        <Head>
          <title>Next.js, FaunaDB and Node.js</title>
        </Head>
        <h1>Next.js, FaunaDB and Node.js</h1>
        <hr />
        <div className="container-scroll">
          <div className="container">
            <h2>Customer Data</h2>
            <div className="table">
              <h4>name</h4>
              <h4 className="telephone">telephone</h4>
              <h4 className="credit-card">credit card</h4>
            </div>
            {data.length > 0 ? (
              data.map((d) => (
                <TableRow
                  key={d.data.telephone}
                  creditCard={d.data.creditCard.number}
                  firstName={d.data.firstName}
                  lastName={d.data.lastName}
                  telephone={d.data.telephone}
                />
              ))
            ) : (
              <>
                <TableRow loading />
                <TableRow loading />
                <TableRow loading />{" "}
              </>
            )}
          </div>
        </div>
      </main>

      <style jsx>
        {`
          main {
            font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
              "Helvetica", "Arial", sans-serif;
            padding: 20px 20px 60px;
            max-width: 640px;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.65;
          }
          header {
            height: 152px;
            margin-top: 3em;
          }
          img {
            height: 48px;
            margin-right: 8px;
            width: 48px;
          }
          img.loading {
            background: #eaeaea;
            border-radius: 50%;
          }
          hr {
            border: none;
            border-top: 1px solid #eaeaea;
            margin-bottom: 48px;
          }
          h1 {
            font-size: 1.5em;
            font-weight: 500;
          }
          h2 {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
            padding: 0 32px;
          }
          h4 {
            color: #666666;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            text-transform: uppercase;
          }
          .container-scroll {
            overflow: scroll;
          }
          .container {
            border: 1px solid #eaeaea;
            border-radius: 4px;
            min-width: 512px;
            overflow: scroll;
            padding-top: 24px;
          }
          .table {
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 3fr 3fr 4fr;
            padding: 0 32px;
          }
          .credit-card {
            margin-left: auto;
          }
          @media screen and (max-width: 580px) {
            main {
              font-size: 14px;
            }
            header {
              height: 9em;
            }
            h2,
            .table {
              padding: 0 16px;
            }
          }
          @media screen and (max-width: 474px) {
            main {
              font-size: 12px;
              padding: 4px;
            }
          }
        `}
      </style>
    </div>
  );
};
