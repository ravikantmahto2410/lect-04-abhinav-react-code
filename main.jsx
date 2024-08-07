// you write import lines by yourself

React DOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
)