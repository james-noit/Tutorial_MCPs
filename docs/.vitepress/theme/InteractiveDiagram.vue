<template>
  <div class="mcp-diagram">
    <div class="diagram-note">Haz clic en un elemento para ver el flujo de información</div>
    <div class="nodes">
      <div id="client" class="node client" @click="showFlow('client')">
        <div class="label">Cliente</div>
        <div class="arrow">→</div>
      </div>
      <div id="server" class="node server" @click="showFlow('server')">
        <div class="label">Servidor (Host MCP)</div>
        <div class="arrow">→</div>
      </div>
      <div id="ai-tool" class="node ai-tool" @click="showFlow('ai')">
        <div class="label">Herramienta IA</div>
      </div>
    </div>
    <div class="flow-description" v-if="currentFlow">
      <h4>Flujo de: {{ flowTitle }}</h4>
      <p>{{ flowText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentFlow = ref('')

const flowTitle = computed(() => {
  if (currentFlow.value === 'client') return 'Cliente a Servidor'
  if (currentFlow.value === 'server') return 'Servidor a Herramienta IA'
  if (currentFlow.value === 'ai') return 'Proceso de la Herramienta IA'
  return ''
})

const flowText = computed(() => {
  if (currentFlow.value === 'client') {
    return "1. El cliente envía un prompt o una solicitud al Servidor a través de una API REST. La solicitud contiene el texto del usuario y metadatos relevantes."
  }
  if (currentFlow.value === 'server') {
    return "2. El Servidor (Host MCP) recibe la solicitud. Procesa los metadatos, enriquece el contexto y se comunica con la Herramienta de IA utilizando el protocolo MCP estandarizado."
  }
  if (currentFlow.value === 'ai') {
    return "3. La Herramienta de IA recibe el contexto del servidor, ejecuta la lógica de IA correspondiente y devuelve el resultado al servidor, que a su vez lo reenvía al cliente."
  }
  return ""
})

function showFlow(node) {
  currentFlow.value = node
}
</script>

<style scoped>
.mcp-diagram {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
  text-align: center;
}
.diagram-note {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
}
.nodes {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
}
.node {
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-grow: 1;
  position: relative;
}
.node:hover {
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.label {
  font-weight: 600;
  font-size: 1.1em;
}
.arrow {
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  color: var(--vp-c-text-3);
}
.ai-tool .arrow {
  display: none;
}
.flow-description {
  margin-top: 24px;
  padding: 16px;
  border: 1px dashed var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  text-align: left;
}
</style>
