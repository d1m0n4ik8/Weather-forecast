import { FC } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

const WeatherAccordion: FC = () => {
	return (
		<Accordion allowMultipleExpanded allowZeroExpanded>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>What harsh truths do you prefer to ignore?</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>
						Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim
						minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default WeatherAccordion
