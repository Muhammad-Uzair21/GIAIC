import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Form from "../components/Form";

const Contact=()=>{
    return(
        <div>
            <Hero heading="let's work together!" message="Reach out by filling the form below"/>
            <Form />
        </div>
    )
}
export default Contact