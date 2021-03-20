import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const CourseItem = (data) => {

    return(
        <>
        <Card style={{    width: '150px',textAlign: "center",padding: '1em 0 0 0',margin: '1em', alignSelf: 'center'}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    <Link underline="none" target="_blank" href={data.data.link}>
                        {data.data.name}
                    </Link>
                </Typography>
            </CardContent>
        </Card>
        </>
    )
};

export default CourseItem;