import Grid from '@material-ui/core/Grid';
import CourseItem from './CourseItem';

const CourseList = ({list}) => {
    return( 
        <Grid container style={{    display: 'flex',flexDirection: 'row', flexWrap: 'wrap'  }}>
            {
                list.length !== 0 && [
                    list.map((course, index) => (
                        <CourseItem key={index} data={course}/>
                    ))
                ]
            }
        </Grid>
    )
}

export default CourseList;