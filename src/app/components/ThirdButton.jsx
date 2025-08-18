import Link from "next/link";

const TertiaryButton = ({text,url, className= ''}) => {
    return (
        <Link href={url} >
          <button className={`px-6 py-2 text-black/63 prompt-regular cursor-pointer gradient-6 rounded-lg ${className}`}>
            {text}
          </button>
        </Link>
    )
}
export default TertiaryButton;