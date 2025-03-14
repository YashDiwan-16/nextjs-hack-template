import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TeamMember, SocialLinkType, teamMembers, getSocialIconColor } from "@/data/teamcard";

function SocialIcon({ type }: { type: SocialLinkType }) {
  switch (type) {
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
      );
    default:
      return null;
  }
}

function getConsistentGradient() {
  // Using a blue/indigo gradient that works well in both light and dark modes
//   return "from-blue-500 to-indigo-600";
return "from-gray-500 to-gray-900";



}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, role, bio, imageSrc, socialLinks } = member;
  const gradient = getConsistentGradient();

  return (
    <div className="group h-full">
      {/* Hexagon Card with Stacked Effect */}
      <div className="relative transform transition-all duration-300 group-hover:-translate-y-2">
        {/* Shadow Card for stacked effect */}
        <div className="absolute -bottom-2 left-1 right-1 top-1 rounded-xl bg-black/10 dark:bg-white/5 blur-sm"></div>
        
        <Card className="relative rounded-lg cursor-pointer overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md backdrop-blur-sm bg-white/90 dark:bg-zinc-900/90">
          {/* Card Border with Gradient */}
          <div className="absolute inset-0 rounded-lg p-[1px] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 dark:opacity-60`}></div>
          </div>
          
          {/* Diagonal colored corner */}
          <div className="absolute -top-10 -right-10 w-20 h-20 transform rotate-45 bg-gradient-to-br opacity-70 dark:opacity-80 z-10 shadow-inner"
              style={{background: `linear-gradient(to bottom right, var(--blue-500), var(--indigo-600))`}}>
          </div>
          
          {/* Content Container */}
          <div className="relative z-20">
            <CardHeader className="relative pt-5 pb-0 px-6">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col">
                  <CardTitle className="text-lg sm:text-xl font-bold tracking-tight">{name}</CardTitle>
                  <Badge className={`w-fit mt-1 text-xs font-medium text-white bg-gradient-to-r ${gradient} border-none`}>
                    {role}
                  </Badge>
                </div>
                
                {/* Avatar with glow effect */}
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full w-12 h-12 bg-gradient-to-r ${gradient} blur-sm opacity-70`}></div>
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-zinc-800 relative">
                    <AvatarImage src={imageSrc} alt={name} />
                    <AvatarFallback className={`bg-gradient-to-br ${gradient} text-white text-base font-semibold`}>
                      {name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="px-6 py-3">
              {/* Bio with custom quotation mark */}
              <div className="relative">
                <div className="absolute -top-1 -left-1 text-4xl leading-none opacity-20 font-serif">"</div>
                <CardDescription className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 pt-2 pl-3 line-clamp-3">
                  {bio}
                </CardDescription>
                <div className="absolute -bottom-1 -right-1 text-4xl leading-none opacity-20 font-serif rotate-180">  </div>
              </div>
            </CardContent>
            
            <CardFooter className="px-6 pb-4 pt-1 flex justify-between items-center">
              {/* Dynamic shape divider */}
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"></div>
              
              {/* Social Links */}
              <div className="flex gap-1 pl-3">
                <TooltipProvider>
                  {socialLinks.map((link, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <a 
                          href={link.url} 
                          className={`${getSocialIconColor(link.type)} p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all transform hover:scale-110 hover:-translate-y-1 duration-200`}
                          aria-label={`${name}'s ${link.type}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon type={link.type} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-xs">
                        {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Meet Our Team
      </h2>
      <p className="text-center text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10">
        Our diverse team of experts is united by a passion for blockchain innovation and a commitment to excellence.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}
