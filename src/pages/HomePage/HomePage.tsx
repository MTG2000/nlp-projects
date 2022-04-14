import { Link } from "react-router-dom"


const PAGES = [
    {
        text: "المحلل الصرفي",
        link: '/lex-analyzer'
    },
    {
        text: "المحلل النحوي",
        link: '#'
    },
    {
        text: "؟؟؟",
        link: '#'
    },
    {
        text: "؟؟؟",
        link: '#'
    },
]

export default function HomePage() {
    return (
        <div className="grid gap-36 "
            style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"
            }}
        >
            {PAGES.map((page, idx) => <Link key={idx} to={page.link}>
                <div className="group cursor-pointer p-32 rounded-24 bg-gray-50 h-[180px]
             relative flex justify-center items-center
             shadow-md
             shadow-primary-300
             ">
                    <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-80 h-80 rounded-full  shadow-inner  text-h3 font-bold
                flex justify-center items-center 
                text-primary-500 bg-gray-100 group-hover:bg-primary-500  group-hover:text-white transition-colors
                ">
                        {idx + 1}
                    </p>
                    <h3 className="text-h4">
                        {page.text}
                    </h3>
                </div>
            </Link>)}
        </div>
    )
}
