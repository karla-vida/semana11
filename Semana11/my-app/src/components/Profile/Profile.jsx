import { usePerfil } from "../../context";

export const Profile = () => {
    const {profile, handleFollow} = usePerfil();
    return (
        <>
        {profile.map((p) => (   
        <div key={p.id}>
            <p>{p.nome}</p>
            <button onClick={()=> handleFollow(p.id)}>
                {p.seguindo ? "Seguindo" : "Seguir"}
            </button>
        </div>
        ))}
         </>
    );
};