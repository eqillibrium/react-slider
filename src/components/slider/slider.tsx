import { useState } from 'react';
import { ISliderProps } from './slider.porps';
import { ReactComponent as Arrow } from './arrow.svg'
import styles from './slider.module.css'
import cn from 'classnames'

const FADE_DURATION = 300;

export const Slider = ({ reviews }: ISliderProps): JSX.Element => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>()
    const handleClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide((s) => s + move)
            setFadeState('fade-in')
        }, FADE_DURATION)
        clearTimeout(currentTimer);
        setFadeState('fade-out')
        setCurrentTimer(timer)
    }
    return (
        <div
            className={styles.slider}>
            <div
                className={cn(styles.slide, styles[fadeState])}
                style={{ transitionDuration: `${FADE_DURATION}ms` }}
            >
                <div className={styles.left}>
                    <div className={styles.text}>{reviews[slide].text}</div>
                    <div className={styles.name}>{reviews[slide].name}</div>
                    <div className={styles.jobPosition}>{reviews[slide].jobPosition}</div>
                </div>
                <div
                    style={{ backgroundImage: `url(${reviews[slide].image})` }}
                    className={styles.right}
                >

                </div>
            </div>
            {slide > 0 && <button
                className={cn(styles.arrow, styles.arrowLeft)}
                onClick={() => handleClick(-1)}
            >
                <Arrow/>
            </button>}
            {slide < reviews.length - 1 && <button
                className={cn(styles.arrow, styles.arrowRight)}
                onClick={() => handleClick(1)}
            >
                <Arrow/>
            </button>}
        </div>
    )
}
