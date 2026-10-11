export const sections=[
{id:'biblioteca',title:'Biblioteca digital',description:'Material por ciclo, año y materia',icon:'BookOpen',photo:'biblioteca',type:'document'},
{id:'staff',title:'Staff docente',description:'Docentes, materias y correo de contacto',icon:'Users',photo:'taller',type:'person'},
{id:'aulas',title:'Aulas docentes',description:'Classroom y sitios web educativos',icon:'Monitor',photo:'planos',type:'classroom'},
{id:'secretaria',title:'Secretaría',description:'Contacto y avisos de licencia',icon:'FileText',photo:'planos',type:'links'},
{id:'planificaciones',title:'Planificaciones anuales',description:'PDF por curso y materia · Público',icon:'FileText',photo:'planos',type:'document'},
{id:'trayectorias',title:'Acompañamiento y trayectorias',description:'PDF por curso y materia · Restringido',icon:'LockKeyhole',photo:'taller',type:'document'},
{id:'cuaderno',title:'Cuaderno y boletines',description:'Accesos a los sistemas escolares',icon:'Notebook',photo:'planos',type:'links'},
{id:'proyectos',title:'Proyectos, visitas y viajes',description:'Experiencias educativas',icon:'Plane',photo:'viaje',type:'story'},
{id:'expo',title:'Expo ENET',description:'Galerías y secuencias de imágenes',icon:'Camera',photo:'expo',type:'story'},
{id:'familias',title:'Contacto para familias',description:'Consultas a Vicedirección',icon:'Mail',photo:'comunidad',type:'contact'},
{id:'comunidad',title:'Servicio a la comunidad',description:'Consultas técnicas, empleo y pasantías',icon:'Handshake',photo:'obra',type:'community'},
{id:'empresas',title:'Empresas y colaboradores',description:'Materiales, herramientas y otros aportes',icon:'Building2',photo:'obra',type:'sponsor'},
{id:'cooperadora',title:'Cooperadora',description:'Integrantes, cargos y correo de contacto',icon:'Users',photo:'comunidad',type:'person'},
{id:'estudiantes',title:'Centro de estudiantes',description:'Integrantes, cargos y correo de contacto',icon:'Users',photo:'expo',type:'person'},
{id:'inscripcion',title:'Inscripción 2027',description:'Planilla PDF y correo para consultas y envío',icon:'FileDown',photo:'planos',type:'document'},
{id:'novedades',title:'Novedades y calendario',description:'Noticias y actividades de la escuela',icon:'CalendarDays',photo:'expo',type:'story'},
];
export const defaults:Record<string,string>={...Object.fromEntries(sections.flatMap(s=>[[s.id+'Title',s.title],[s.id+'Description',s.description]])),heroImageUrl:'',logoUrl:'',school:'CET Nº33',subtitle:'Escuela Técnica · Maestro Mayor de Obras',location:'General Roca · Río Negro',heroTitle:'APRENDER HACIENDO.',heroSubtitle:'PROYECTAR CON FUTURO.',heroText:'Formación técnica, trabajo en equipo y compromiso con la comunidad.',bibliotecaUrl:'https://biblioteca-mmo.sleekshore.chatgpt.site',secretariaEmail:'',licenciaUrl:'',licenciaTipoUrl:'',vicedireccionEmail:'',comunidadEmail:'',empresasEmail:'',cooperadoraEmail:'',estudiantesEmail:'',inscripcionEmail:'',inscripcionYear:'2027',inscripcionInstructions:'Descargá la planilla, completala y enviá el PDF al correo de inscripción.',calendarioUrl:'',cuadernoUrl:'',boletinesUrl:'',inscripcionPdf:'',institutionText:'Una escuela técnica que forma estudiantes para proyectar, construir y trabajar con la comunidad.'};
export type PortalRecord={id:string;section:string;author:string;created:string;data:Record<string,string>;files:{id:string;name:string;mime:string}[]};
export type Actor={email:string;name:string;role:string;sections:string[]}|null;
