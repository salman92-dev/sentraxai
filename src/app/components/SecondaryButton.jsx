import Link from "next/link";

const SecondaryButton = ({text,url, className= ''}) => {
    return (
        <Link href={url} >
          <button className={`px-6 py-2 prompt-regular cursor-pointer bg-[#333333] rounded-lg border border-[#fff]/50' ${className}`}>
            {text}
          </button>
        </Link>
    )
}
export default SecondaryButton