import Button from '@/shared/ui/Button'
import imag from '@/shared/assets/arrow-right.svg'
import styles from './Info.module.css'

const Info = ()=>{


    return(
        <div className="">
            <div className="">
                <span>лицензированная автошкола
                </span>
                <span>твой уверенный старт за рулем</span>
                <span>Обучение на права категорий A, B, C по современным стандартам. Собственный технологичный автодром, новые автомобили и опытные инструкторы. Сдай экзамен в ГИБДД с первого раза!</span>
            </div>
            <div className="">
                <Button option="red">Выбрать категорию <img src={imag} alt="" /></Button><Button option="grey">Консультация эксперта</Button>
            </div>
            <div className="">
                <div>
                    <span>100%</span>
                    <span>Сдали с 1-го раза</span>
                    <span>Благодаря авторской методике обучения</span>
                </div>
                <div>
                    <span>12+</span>
                    <span>Филиалы в РФ</span>
                    <span>Развитая инфраструктура и учебные классы</span>
                </div>
                <div>
                    <span>150 000+</span>
                    <span>Курсантов обучено</span>
                    <span>Доверяют нам свою безопастность</span>
                </div>
            </div>
        </div>
    )
}

export default Info