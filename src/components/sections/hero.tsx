import { Button } from '../ui/button';

export default function Hero() {
    return (
        <section className="flex justify-center items-center gap-4">
            <div >
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className="mt-3 text-xl text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat maiores rerum asperiores numquam expedita?
                </p>
                <Button className='mt-4'>
                    Get Started
                </Button>
            </div>
            <img
                src="https://placehold.co/480x480"
                className="rounded-xl"
                alt="Image Description"
            />
        </section>
    );
}
