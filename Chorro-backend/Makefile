.include <name.py>

SERVICE != echo ${app_name}back
REGGAE_PATH := /usr/local/share/reggae
SYSPKG := YES

shell: up
	@sudo cbsd jexec user=devel jname=${SERVICE} /usr/src/bin/shell.sh

init: up
	@sudo cbsd jexec jname=${SERVICE} env OFFLINE=${offline} SYSPKG=${SYSPKG} /usr/src/bin/init.sh

do_devel:
	@sudo cbsd jexec jname=${SERVICE} env OFFLINE=${offline} SYSPKG=${SYSPKG} /usr/src/bin/devel.sh

.include <${REGGAE_PATH}/mk/service.mk>
