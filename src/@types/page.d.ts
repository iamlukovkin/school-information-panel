import React from "react";

export type Page = {
    link: string;
    title: string | null;
    description: string | null;
    content: React.FC;
};
