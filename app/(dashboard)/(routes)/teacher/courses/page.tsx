import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const  CoursesPage = () => {
    return (
        <div className='p-6'>

            <Link href="/teacher/create">

                <Button>
                    New Course
                </Button>

            </Link>
           
        </div>
    )
} 