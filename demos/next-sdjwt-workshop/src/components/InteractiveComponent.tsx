import { Component } from "@/reducers/app";

export const InteractiveComponent: React.FC<{ content: Component }> = props => {
    const { content } = props;
    return content({})
}