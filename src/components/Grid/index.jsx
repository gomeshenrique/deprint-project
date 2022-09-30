import { GridStyle } from "./style"

import { Section } from "../Section"
import { GridTitle } from "../Card/style"

export const Grid = ({ children, columns }) => {
    return (
        <Section>
            <GridTitle>Conheça alguns dos nossos produtos</GridTitle>
            <GridStyle columns={columns} > {children} </GridStyle>
        </Section>
    )
}