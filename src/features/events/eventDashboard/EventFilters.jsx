import React from "react";
import Calendar from "react-calendar";
import { Menu, Header } from "semantic-ui-react";

export default function EventFilters() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content="All Events" />
                <Menu.Item content="I'm Going" />
                <Menu.Item content="I'm Hosting" />
            </Menu>
            <Header icon='calendar' attached color='teal' content='Select Date' />
            <Calendar />
        </>
    )
}