
#include <libintl.h>
#include <locale.h>

char* translate(char* locale, char* domain, char* text){
    setlocale( LC_ALL,  locale);
    bindtextdomain(domain, "/usr/share/locale" );
    textdomain(domain);
    return gettext(text);
}
