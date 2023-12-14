import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NextPage } from 'next';


export const CoursePage: NextPage  = () => {
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