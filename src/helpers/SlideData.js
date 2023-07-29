import inkjet from '../assets/slides/inkjet.png'
import laser from '../assets/slides/fiber.png'
import tij from '../assets/slides/thermal.png'
import ibg  from '../assets/slides/inkjet_w.png'
import lbg  from '../assets/slides/laser_w.png'
import tbg  from '../assets/slides/thermal_w.png'

export const slides = [
    {
        id: 0,
        image: inkjet,
        title: 'Inkjet',
        info: 'Printers',
        bg: ibg,
    },
    {
        id: 1,
        image: laser,
        title: 'Laser',
        info: 'Machine',
        bg: lbg,
    },
    {
        id: 2,
        image: tij,
        title: 'Thermal',
        info: 'Printers',
        bg:tbg,
    }
]