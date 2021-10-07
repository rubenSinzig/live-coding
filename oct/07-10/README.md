# React most needed steps

### Create your project

```bash
npx create-react-app <your-app-name>
```

### Installing some external packages

```bash
npm install sass
npm install react-icons
npm install axios
npm install react-router-dom
```

### Axios GET example

When you need to get some data from any API, your request should look something like this

```bash
    axios
      .get("http://API address.domain/your API key, other values if needed")
      .then((res) => {
        console.log(res);
        setData(res.data)
      }
      .catch((err)=>{
          console.log(err);
      }));
  };

```

### Axios POST example

The following example is made to send data object through post request, data object includes media file

```bash
    axios
      .post("http://localhost:5000/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      }
      .catch((err)=>{
          console.log(err);
      }));
  };

```

### React Router example

```bash
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
   const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        {
            // process.env.PUBLIC_URL is important to run your app on localhost and on server with no problems
          // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        }

        <Route path="/" exact component={Home} />
        // other way
         <Route path="/" exact render={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/product"
          exact
          component={() => <Products data={Data} />}
        />
          { // other method
          //  <Route  path="/products"
          // exact >
          // <Products data={Data} />
          // </Route>
        }
        {
          // more about match
          // https://reactrouter.com/web/api/match
          // /product/id=4
        }
        <Route
          path="/product/:id"
          component={({ match }) => {
            console.log(match);
            return <ProductInfo data={Data} id={match.params.id} />;
          }}
        />

        <Route path={() => "/main" || "/admin" || "/any-other-word" || regex expression}>
            <Soon />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
```

Redux
