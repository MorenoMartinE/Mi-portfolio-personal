export const DATOS_MENU = {
    ELEMENTOS_MENU : [
        'Inicio', 
        'Habilidades', 
        'Contacto'
    ],
    VINCULOS_MENU : [
        "#inicio",
        "#habilidades",
        "#contacto"
    ]
}

/**
 * Coloca en API_GITHUB_URLs tu usrname a ambas url, la cantidad de repos que desees mostrar de todas las publicas que
 * posee tu github y en REPOS_IMG_URL la url a la imagen que quieres que se muestre para cada repo. 
 */
export const API_GITHUB_URLs = {
    urlUsr : "https://api.github.com/users/MorenoMartinE",
    urlRep : "https://api.github.com/users/MorenoMartinE/repos",
    numReps : 1,
}

export const REPOS_IMG_URL = [
    "https://repository-images.githubusercontent.com/485933542/7a42a097-64f2-4338-9b9e-1c3cd2ee289b",
    "https://repository-images.githubusercontent.com/479137070/06e80da9-57e0-4312-81a5-afbc35777b57"
]


/**
 * Coloca en orden el nombre que quieres darle a la skill que deseas agregar, una imagen (recomendado 1200*1200px) y un numero
 * entre el 1 y el 100 que represente tu nivel de habilidad
 */
export const DATA_HABILIDADES = {
    HABILIDADES : [
        "HTML", 
        "CSS", 
        "JavaScript",
        "React",
        "C",
        "C#",
        "Java",
        "MySQL",
        "PHP",
        "WordPress",
       ],
    ICONOS : [
        "../../app/assets/icons/html5.png",
        "../../app/assets/icons/css3.png",
        "../../app/assets/icons/JavaScript.png",
        "./../app/assets/icons/reactjs.png",
        "./../app/assets/icons/C.png",
        "./../app/assets/icons/CShar.png",
        "./../app/assets/icons/java.png",
        "./../app/assets/icons/MySql.png",
        "./../app/assets/icons/php.png",
        "./../app/assets/icons/WordPress.png",
        ],
    ESTADO : [
        87,
        75,
        79,
        55,
        70,
        60,
        50,
        35,
        30,
        60,
     ],
}

/**
 * Coloca la url de tu linkedin y tu direccion de correo electronico
 */
export const DATA_FOOTER = {
    linkedinIcon : "../../app/assets/icons/linkedin.png",
    linkedinUrl: "https://www.linkedin.com/in/martin-esteban-moreno/",
    email: "morenomartinesteban96@gmail.com"
}