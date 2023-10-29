import {Rate as RateA, RateProps as RatePropsA} from 'antd'

type RatingProps = RatePropsA 
export const Rating = (props:RatingProps)=>{
    return <RateA {...props}/>
}