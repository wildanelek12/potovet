"use client"

import Wrapper from "./Parts/Wrapper";

export default function Sidebar() {
    return (
        <Wrapper>
            <Wrapper.Item id="dashboard" label="Dashboard" href="/clientzone/dashboard" />
            <Wrapper.Item id="management-project" label="Management Project" href="/clientzone/management-project" />
        </Wrapper>
    );
}
