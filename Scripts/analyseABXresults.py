#!/usr/local/bin/python3
#
# Convert the ABX_results output into useful TSV tables
#
# Copyright: R.J.J.H. van Son, 2019
# r.j.j.h.vanson <at> gmail <dot> com
#
# License: GNU Affero General Public License v3
# 
import fileinput
import re
import math

output_path = False

totalCorrect = 0
totalWrong = 0

l = 0
for line in fileinput.input():
	fileName = (re.search('ABX_Results_(.*)\.txt$', fileinput.filename())).group(1)
	subject, dateResults = fileName.split('_') if re.search('_', fileName) else ["-", fileName]
	if not output_path:
		output_path = 'ABX_results_table_'+fileName+".tsv"
		results_table = open(output_path,'w')
		results_table.write("Num\tCorrect\tX\tDistractor\tXsex\tDsex\tManType\tPSnumX\tPSnumD\tSubject\tDate\n")
	values = line.rstrip().split(";")
	if values[0] == "Num": continue
	seqNbr = values[0]
	if int(seqNbr) <= 4: continue
	correct = False
	speakerX = values[2][0:4]
	speakerA = values[3][0:4]
	speakerB = values[4][0:4]
	
	psX = (re.search('PS([\d]+)A_', values[2])).group(1)
	if speakerX == speakerA:
		speakerDistr = speakerB
		psDistr = (re.search('PS([\d]+)A_', values[4])).group(1)
	else:
		speakerDistr = speakerA
		psDistr = (re.search('PS([\d]+)A_', values[3])).group(1)
	if (values[1] == "A") and (speakerX == speakerA): correct = True
	if (values[1] == "B") and (speakerX == speakerB): correct = True
	if correct:
		totalCorrect += 1
	else:
		totalWrong += 1
	
	# HL or LH
	manipulationType = "LH" if  re.match('_510', values[2]) else "HL"
	results_table.write(seqNbr+"\t"+("%i"%correct)+"\t"+speakerX+"\t"+speakerDistr+"\t"+speakerX[0]+"\t"+speakerDistr[0]+"\t"+manipulationType+"\t"+psX+"\t"+psDistr+"\t"+subject+"\t"+dateResults+"\n")

# Close output table file
results_table.close()

prob = totalCorrect / (totalCorrect+totalWrong)
Hresp = -(prob*math.log2(prob)+(1-prob)*math.log2(1-prob))
print("Correct: %i, Wrong: %i, Pcorr: %.3f"%(totalCorrect, totalWrong, prob))
print("Hresp: %.3f bit (missing info)"%(Hresp))

