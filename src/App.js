import React from 'react';
import "./App.css";
import AppBarComponent from "./components/AppBar";
import Content from './components/Content';
import DrawerComponent from "./components/Drawer";

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
    };

    return (
        <div className="App">
            <AppBarComponent toggleDrawer={toggleDrawer} />
            <DrawerComponent isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <Content />
        </div>
    );
}

export default App;
