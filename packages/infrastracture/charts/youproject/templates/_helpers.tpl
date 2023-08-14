{{- define "dyonisus.volumepostgres" -}}
{{- if .Values.volumepostgres.enabled -}}
{{- include "volumepostgres.fullname" . }}
{{- end -}}
{{- end -}}


{{- define "dyonisus.secrtes" -}}
{{- if .Values.secrtes.enabled -}}
{{- include "secrtes.fullname" . }}
{{- end -}}
{{- end -}}

{{- define "dyonisus.ingres" -}}
{{- if .Values.ingres.enabled -}}
{{- include "ingres.fullname" . }}
{{- end -}}
{{- end -}}

{{- define "dyonisus.persistentvolumeclaims" -}}
{{- if .Values.persistentvolumeclaims.enabled -}}
{{- include "persistentvolumeclaims.fullname" . }}
{{- end -}}
{{- end -}}


{{- define "dyonisus.channel" -}}
{{- if .Values.channel.enabled -}}
{{- include "channel.fullname" . }}
{{- end -}}
{{- end -}}

{{- define "dyonisus.postgres" -}}
{{- if .Values.postgres.enabled -}}
{{- include "postgres.fullname" . }}
{{- end -}}
{{- end -}}


{{- define "dyonisus.shell" -}}
{{- if .Values.shell.enabled -}}
{{- include "shell.fullname" . }}
{{- end -}}
{{- end -}}
