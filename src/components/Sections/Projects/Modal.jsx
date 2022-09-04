import React from 'react';
import { ModalContent, ProjectModal, SliderItem, StyledSlider } from './projects_styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = (props) => {
	const sliderConfig = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
	return (
		<ProjectModal open={props.modalStats.open}>
			<ModalContent>
				<StyledSlider {...sliderConfig}>
					{props.modalStats.images.map((url, index) => (
						<SliderItem key={index}>
							<img src={url} />
						</SliderItem>
					))}
				</StyledSlider>
			</ModalContent>
		</ProjectModal>
	);
};

export default Modal;