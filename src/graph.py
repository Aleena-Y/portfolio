from graphviz import Digraph

# Create flowchart
flowchart = Digraph(format="png")
flowchart.attr(rankdir="TB", size="8")

# Define nodes
flowchart.node("A", "Power On: MCU configures DDS chips\n(~300–500 kHz)")
flowchart.node("B", "Transducer array generates\nphase-controlled sine waves")
flowchart.node("C", "Standing waves form in fluid channel")
flowchart.node("D", "Pressure nodes created")
flowchart.node("E", "Particles migrate to nodes due to\nacoustic radiation force")
flowchart.node("F", "Main liquid stream flows through,\ndepleted of target particles")
flowchart.node("G", "Particles trapped at nodes")
flowchart.node("H", "User triggers purge cycle")
flowchart.node("I", "Acoustic field off + backflush\n→ concentrated particles released to waste outlet")
flowchart.node("J", "Regenerative circuit captures reflected\nacoustic energy → returns to supercapacitor")

# Define edges
flowchart.edges([("A","B"),("B","C"),("C","D"),("D","E"),("E","F"),("E","G")])
flowchart.edge("G","H","At intervals")
flowchart.edge("H","I")
flowchart.edge("C","J","Energy feedback")

# Render flowchart to file
file_path = "/mnt/data/acoustic_particle_separator_flowchart"
flowchart.render(file_path, format="png", cleanup=True)

file_path + ".png"